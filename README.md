
## Laravel Crud Using React

![alt text](https://github.com/mahabubul1/Laravel-react-crud/blob/master/laravel_crud.jpg?raw=true)


## Add From using Modals

![alt text](https://github.com/mahabubul1/Laravel-react-crud/blob/master/add-form.jpg?raw=true)


##  Laravel Api Route 

#### api.php

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::resource('customer', 'CustomerController');
