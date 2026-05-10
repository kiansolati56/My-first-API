<?php

namespace App\Http\Controllers\Api;
use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());

        return response()->json([
            'message' => 'Post created successfully',
            'data' => $post
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}
