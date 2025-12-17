<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::composer('*', function ($view) {
            $headerProps = [
                'name' => 'John Doe',
            ];
            $headerResponse = Http::get('http://host.docker.internal:5174/AppHeader', $headerProps);
            $header = [
                'html' => $headerResponse->body(),
                'props' => json_encode($headerProps),
            ];

            $view->with('header', $header);
        });
    }
}
