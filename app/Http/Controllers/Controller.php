<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /** 输出用户信息
     * @param $message
     * @param null $user_id
     */
    public function getUserJson($message,$user_id=null)
    {
        $data = [
            "status"  => "success",
            "message" => $message,
            "user_id" => $user_id
        ];
        header('Content-type:text/json');
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        exit;
    }
    /** 输出评论信息
     * @param $message
     * @param null $user_id
     */
    public function getCommentJson($message,$user_id=null)
    {
        $data = [
            "status"  => "success",
            "message" => $message
        ];
        header('Content-type:text/json');
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        exit;
    }
    /** 输出评论信息
     * @param $message
     * @param null $user_id
     */
    public function getCommentsJson($message,$data)
    {
        $data = [
            "status"  => "success",
            "message" => $message,
            "data" => $data
        ];
        header('Content-type:text/json');
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        exit;
    }

}
