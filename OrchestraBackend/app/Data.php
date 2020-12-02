<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $fillable = [
        'role'
    ];

    public function employee(){
        return $this->belongsTo('App\Employee');
    }
}
