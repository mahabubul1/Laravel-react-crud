
## Laravel Crud Using React

![alt text](https://github.com/mahabubul1/Laravel-react-crud/blob/master/laravel_crud.jpg?raw=true)


## Add From using Modals

![alt text](https://github.com/mahabubul1/Laravel-react-crud/blob/master/add-form.jpg?raw=true)


##  Laravel Api Route 

#### api.php


<p> Route::resource('customer', 'CustomerController'); </p>


###  Web.php

<p>
    Route::get('/{path?}', [
    'uses' => 'HomeController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
  ])->name('home');

</p>
