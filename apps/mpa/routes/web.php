<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $response = Http::get('http://host.docker.internal:5174/AppHeader', [
        'name' => 'dummy'
    ]);;

    return view('welcome')->with('prenderedHeader', $response->body());
});
