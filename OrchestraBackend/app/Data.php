<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $fillable = [
        'DNI', 'name', 'firstSurname', 'secondSurname', 'phone',  'userEmail'
    ];

    public function users(){
        return $this->belongsTo('App\User');
    }
}
