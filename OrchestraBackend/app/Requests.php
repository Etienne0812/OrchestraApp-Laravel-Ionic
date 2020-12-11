<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{

    protected $fillable = [
        'type', 'startDate', 'endDate', 'reason', 'revised', 'userEmail'
    ];

    public function users(){
        return $this->belongsTo('App\User');
    }
}
