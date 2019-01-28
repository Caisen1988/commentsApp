<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
$router->post('/comment/list','CommentController@list');
$router->post('/user/login','UserController@login');
$router->post('/user/register','UserController@register');
$router->post('/user/logout','UserController@logout');
$router->post('/comment/delete','CommentController@delete');
$router->post('/comment/add','CommentController@add');
$router->post('/comment/edit','CommentController@edit');
$router->post('/theme/list','ThemeController@list');
