<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Theme extends Model
{
    public $id;
    /**
     * Relevant to data tables
     *
     * @var string
     */
    protected $table = "theme";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['theme'];

    /** 获取所有主题
     * @param $id
     * @param $where
     * @return mixed
     */
    public function getThemeList($id,$where)
    {
        if($id){
            $this->id = explode(",",$id);
            $themes = Theme::find($this->id);
            return $themes;
        }
        if($where){
            $themes = Theme::where("theme","like",$where)
                ->select(['id', 'theme'])
                ->get();
            return $themes;
        }
        $themes = Theme::orderBy('id')
            ->select(['id', 'theme'])
            ->get();
        return $themes;
    }
}
