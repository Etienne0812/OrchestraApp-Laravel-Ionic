<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('DNI');
            $table->string('name');
            $table->string('firstSurname');
            $table->string('secondSurname');
            $table->string('phone');
            $table->string('email');

            $table->biginteger('employeeId')->unsigned(); 
            $table->foreign('employeeId')->references('id')->on('employees'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data');
    }
}
