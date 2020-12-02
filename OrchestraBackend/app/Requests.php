<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{

    protected $fillable = [
        'type', 'startDate', 'endDate', 'reason', 'revised', 'employeeId'
    ];

    public function employee(){
        return $this->belongsTo('App\Employee');
    }
}
