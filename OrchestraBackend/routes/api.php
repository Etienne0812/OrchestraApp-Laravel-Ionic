<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\StatusController;

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

Route::group(['middleware' => 'auth:api'], function(){
    // Users
    Route::get('users', 'UserController@index')->middleware('isAdmin');
    Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');
});


Route::prefix('requests')->group(function () {
    Route::get('/get', [RequestsController::class, 'index']);
    Route::post('/post', [RequestsController::class, 'store']);
    Route::put('/put/{id}', [RequestsController::class, 'update']);
    Route::get('/get/{id}', [RequestsController::class, 'show']);
    Route::delete('/delete/{id}', [RequestsController::class, 'destroy']);
});

Route::prefix('data')->group(function () {
    Route::get('/get', [DataController::class, 'index']);
    Route::post('/post', [DataController::class, 'store']);
    Route::put('/put/{id}', [DataController::class, 'update']);
    Route::get('/get/{id}', [DataController::class, 'show']);
    Route::delete('/delete/{id}', [DataController::class, 'destroy']);
});

Route::prefix('status')->group(function () {
    Route::get('/get', [StatusController::class, 'index']);
    Route::post('/post', [StatusController::class, 'store']);
    Route::put('/put/{id}', [StatusController::class, 'update']);
    Route::get('/get/{id}', [StatusController::class, 'show']);
    Route::delete('/delete/{id}', [StatusController::class, 'destroy']);
});

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});