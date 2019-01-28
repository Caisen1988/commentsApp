<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class User extends Model
{

    /**
     * Relevant to data tables
     *
     * @var string
     */
    protected  $table = "user";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'password','is_delete'
    ];

    public function addUser($name,$password,$is_delete=1){
        $user = User::create([
            'name' => $name,
            'is_delete' => $is_delete,
            'password' => md5($password)
        ]);
        return $user;
    }
    public function getUserNumber($name){
        return User::where('name', '=', $name)->count();
    }
}
