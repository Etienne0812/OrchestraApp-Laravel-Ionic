<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $fillable = [
        'DNI', 'name', 'firstSurname', 'secondSurname', 'phone', 'email', 'employeeId'
    ];

    public function employee(){
        return $this->belongsTo('App\Employee');
    }
}
