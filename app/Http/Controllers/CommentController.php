<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public $id;
    public $commentModel;

    const ADD_SUCCESS = "新增成功";
    const ADD_FALSE = "新增失败";
    const EMPTY_CONTENT_USER = "请输入评论内容和用户id";
    const EMPTY_COMMENT = "不存在此评论";
    const DELETE_SUCCESS = "删除成功";
    const DELETE_FALSE = "删除失败";
    const COMMENTS_LIST = "获取评论列表成功";
    const EMPTY_USER = "不存在此用户";
    const NO_POWER = "你没有权限修改此评论";
    const EDIT_SUCCESS = "修改成功";
    const EDIT_FALSE = "修改失败";
    const EMPTY_COMMENT_CONTENT = "请输入评论内容";

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Comment $comment)
    {
        $this->commentModel = $comment;
    }

    /** 获取所有的评论
     * @param Request $request
     */
    public function list(Request $request)
    {
        $comments = $this->commentModel->getCommentList($request->input('id'),$request->input('where'));
        $this->getCommentsJson(self::COMMENTS_LIST, $comments);
    }

    /** 增加所有的评论
     * @param Request $request
     */
    public function add(Request $request)
    {
        if (empty($request->input('comment'))&&empty($request->input('user_id'))) {
            $this->getCommentJson(self::EMPTY_CONTENT_USER);
        }
        $comment = $this->commentModel->addComment($request->input('comment'), 1, $request->input('user_id'));
        if ($comment) {
            $this->id = $comment->id;
            $this->getCommentJson(self::ADD_SUCCESS, $this->id);
        }
        $this->getCommentJson(self::ADD_FALSE);
    }

    /** 删除所有的评论
     * @param Request $request
     */
    public function delete(Request $request)
    {
        if (!$request->input('comment_id')) {
           $this->getCommentJson(self::EMPTY_COMMENT);
        }
        if(!$this->commentModel->getComment($request->input('comment_id'))){
            $this->getCommentJson(self::EMPTY_COMMENT);
        }
        $comment = $this->commentModel->getComment($request->input('comment_id'));
        $comment->is_delete = 0;
        if ($comment->save()) {
            $this->getCommentJson(self::DELETE_SUCCESS);
        }
        $this->getCommentJson(self::DELETE_FALSE);

    }

    /** 编辑所有的评论
     * @param Request $request
     */
    public function edit(Request $request)
    {
        if(!$request->input('comment_id'))
        {
            $this->getCommentJson(self::EMPTY_COMMENTT);
        }
        if(!$request->input('user_id')){
            $this->getCommentJson(self::EMPTY_USER);
        }
         if(!$request->input('comment'))
         {
             $this->getCommentJson(self::EMPTY_COMMENT_CONTENT);
         }

        $comment = $this->commentModel->getComment($request->input('comment_id'));
        if ($comment->user_id != $request->input('user_id'))
        {
            $this->getCommentJson(self::NO_POWER);
        }
        $comment->comment = $request->input('comment');
        if ($comment->save()) {
            $this->getCommentJson(self::EDIT_SUCCESS);
        }
        $this->getCommentJson(self::EDIT_FALSE);

    }
}
