<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $createdAt = $this->faker->dateTimeBetween('-1 week', 'now');
        return [
            'title' => $this->faker->realText(30),
            'content' => $this->faker->realText(150),
            'created_at' => $createdAt,
            'updated_at' => $createdAt,
        ];
    }
}
