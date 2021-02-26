<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\StatusController;
use JasperPHP\JasperPHP as JasperPHP;

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
    Route::get('/userData/{email}', [RequestsController::class, 'userData']);
    Route::delete('/delete/{id}', [RequestsController::class, 'destroy']);
});

Route::prefix('data')->group(function () {
    Route::get('/get', [DataController::class, 'index']);
    Route::post('/post', [DataController::class, 'store']);
    Route::put('/put/{id}', [DataController::class, 'update']);
    Route::get('/get/{id}', [DataController::class, 'show']);
    Route::get('/userData/{email}', [DataController::class, 'userData']);
    Route::delete('/delete/{id}', [DataController::class, 'destroy']);
});

Route::prefix('status')->group(function () {
    Route::get('/get', [StatusController::class, 'index']);
    Route::post('/post', [StatusController::class, 'store']);
    Route::put('/put/{id}', [StatusController::class, 'update']);
    Route::get('/get/{id}', [StatusController::class, 'show']);
    Route::get('/userData/{email}', [StatusController::class, 'userData']);
    Route::delete('/delete/{id}', [StatusController::class, 'destroy']);
});

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::get('userData/{email}', 'AuthController@userData');
    
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});

Route::get('/compilar', function () {
    // Crear el objeto JasperPHP
    $jasper = new JasperPHP;
    
    // Compilar el reporte para generar .jasper
    $jasper->compile(base_path() .
    '//public/solicitudesorquesta.jrxml')->execute();
   
    return view('welcome');
});

Route::get('/reporte', function () {
    // Crear el objeto JasperPHP
    $jasper = new JasperPHP;
    $headers = ['Content-Type' => 'application/pdf'];
    

    $filename = 'solicitudesorquesta';
    $output = base_path('//storage/' . $filename);
    // Generar el Reporte
    $jasper->process(
        // Ruta y nombre de archivo de entrada del reporte
        base_path() .
        '//public/solicitudesorquesta.jasper', 
        $output, // Ruta y nombre de archivo de salida del reporte (sin extensión)
        array('pdf', 'rtf'), // Formatos de salida del reporte
        array(),
        array(
            'driver' => 'mysql', 
            'host' => '127.0.0.1', 
            'port' => '3306', 
            'database' => 'orchestra', 
            'username' => 'root', 
            'password' => '',
        ), 
    )->execute();
    $filename = 'solicitudorquesta.pdf';
    $path = storage_path($filename);
    $pathToFile = storage_path($filename);
    // return response()->file($pathToFile);

        
    
});