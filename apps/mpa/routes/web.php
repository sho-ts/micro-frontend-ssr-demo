<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $headerProps = [
        'name' => 'dummy'
    ];
    $headerResponse = Http::get('http://host.docker.internal:5174/AppHeader', $headerProps);
    $header = [
        'html' => $headerResponse->body(),
        'props' => json_encode($headerProps),
    ];

    return view('welcome')->with(
        'header',
        $header
    );
});
