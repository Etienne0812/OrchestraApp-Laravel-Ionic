<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{

    protected $fillable = [
        'type', 'startDate', 'endDate', 'userEmail'
    ];

    public function users(){
        return $this->belongsTo('App\User');
    }
}
