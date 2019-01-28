<?php

namespace App\Http\Controllers;
header("Content-type:text/html;charset=utf-8");

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $id;
    private $userModel;
    const NAME_EXISTS = "用户已经存在";
    const REGISTER_SUCCESS = "注册成功";
    const REGISTER_FALSE = "注册失败";
    const LOGIN_SUCCESS = "登录成功";
    const EMPTY_NAME = "请输入账号";
    const EMPTY_PASSWORD = "请输入密码";
    const EMPTY_USER = "不存在此用户";
    const LOGOUT_SUCCESS = "登出成功";

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->userModel = $user;
    }

    /** 用户注册
     * @param Request $request
     */
    public function register(Request $request)
    {
        if (!$request->input('name')) {
            $this->getUserJson(self::EMPTY_NAME);
        }
        if (!$request->input('password')) {
            $this->getUserJson(self::EMPTY_PASSWORD);
        }
        $userNameNumber = $this->userModel->getUserNumber($request->input('name'));

        if ($userNameNumber > 0) {
            $this->getUserJson(self::NAME_EXISTS);
        }
        $user = $this->userModel->addUser($request->input('name'),($request->input('password')));
        if ($user) {
            $this->id = $user->id;
            $this->getUserJson(self::REGISTER_SUCCESS, $this->id);
        }
        $this->getUserJson(self::REGISTER_SUCCESS);
    }

    /** 用户登录
     * @param Request $request
     */
    public function login(Request $request)
    {
        if (!$request->input('name')) {
            $this->getUserJson(self::EMPTY_NAME);
        }
        if (!$request->input('password')) {
            $this->getUserJson(self::EMPTY_PASSWORD);
        }
        $user = User::where('name', '=', $request->input('name'))->where('password', '=', md5($request->input('password')))->first();
        if(empty($user)) {
            $this->getUserJson(self::EMPTY_USER);
        }
        $this->id = $user->id;
        $this->getUserJson(self::LOGIN_SUCCESS, $this->id);
    }
    public function logout(Request $request)
    {
        if(!$request->input('user_id')) {
            $this->getUserJson(self::EMPTY_NAME);
        }
        $this->getUserJson(self::LOGOUT_SUCCESS);
    }
}