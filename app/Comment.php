<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Comment extends Model
{
    public $id;
    /**
     * Relevant to data tables
     *
     * @var string
     */
    protected $table = "comment";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['comment', 'user_id'];

    /**获取评论列表
     * @return mixed
     */
    public function getCommentList($id,$where)
    {
        if($id){
            $this->id = explode(",",$id);
            $themes = Comment::where(['is_delete' => 1])->find($this->id);
            return $themes;
        }
        if($where){
            $themes = Comment::where("comment","like",$where)
                ->where(['is_delete' => 1])
                ->select(['id', 'comment', 'user_id', 'created_at', 'updated_at'])
                ->get();
            return $themes;
        }
        $comments = Comment::where(['is_delete' => 1])
            ->select(['id', 'comment', 'user_id', 'created_at', 'updated_at'])
            ->get();
        return $comments;
    }

    /**增加评论
     * @param $comment
     * @param $is_delete
     * @param $user_id
     * @return mixed
     */
    public function addComment($comment, $is_delete, $user_id)
    {
        $comment = Comment::create([
            'comment' => $comment,
            'is_delete' => $is_delete,
            'user_id' => $user_id
        ]);
        return $comment;
    }

    /** 获取评论
     * @param $id
     * @return mixed
     */
    public function getComment($id)
    {
        return Comment::find($id);
    }

}
