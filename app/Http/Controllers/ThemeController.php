<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;

class ThemeController extends Controller
{
    public $themeModel;
    const THEMES_LIST = "获取评论列表成功";

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Theme $theme)
    {
        $this->themeModel = $theme;
    }

    /**
     * 获取主题列表
     */
    public function list(Request $request)
    {
        $comments = $this->themeModel->getThemeList($request->input('id'),$request->input('where'));
        $this->getCommentsJson(self::THEMES_LIST, $comments);
    }
}
