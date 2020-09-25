<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function index()
    {
        $users = Customer::all();

        return response()->json(['success' => true, 'users' => $users]);
    }
}