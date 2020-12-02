<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\RequestsController;

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

Route::prefix('employee')->group(function () {
Route::get('/get', [EmployeeController::class, 'index']);
Route::post('/post', [EmployeeController::class, 'store']);
Route::put('/put/{id}', [EmployeeController::class, 'update']);
Route::get('/get/{id}', [EmployeeController::class, 'show']);
Route::delete('/delete/{id}', [EmployeeController::class, 'destroy']);
    
});

Route::prefix('requests')->group(function () {
    Route::get('/get', [RequestsController::class, 'index']);
    Route::post('/post', [RequestsController::class, 'store']);
    Route::put('/put/{id}', [RequestsController::class, 'update']);
    Route::get('/get/{id}', [RequestsController::class, 'show']);
    Route::delete('/delete/{id}', [RequestsController::class, 'destroy']);
});