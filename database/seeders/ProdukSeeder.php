<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('produk')->insert([
            'nama_produk' => Str::random(10),
            'keterangan' => fake()->paragraph(2, true),
            'harga' => rand(5000, 20000),
            'jumlah' => rand(20, 130),
        ]);
    }
}
