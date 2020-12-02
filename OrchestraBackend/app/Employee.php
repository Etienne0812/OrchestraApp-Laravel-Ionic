<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'role'
    ];

    public function data(){
        return $this->hasOne('App/Data');
    }

    public function status(){
        return $this->hasOne('App/Status');
    }

    public function requests()
    {
        return $this->hasMany('App\Requests');
    }
}
