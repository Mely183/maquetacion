const express = require("express");
const router = express.Router();

const postController = require('../controllers/postsControllers')
//const auth = require('../middlewares/auth')

/**
 * @swagger
 * /posts:
 *  get:
 *      summary: Get all posts form db
 *      tags:
 *          - posts
 *      description: Retrive all posts from database
 *      responses:
 *          200:
 *              description: return a message and all product data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: User found
 *                              data:
 *                                  $ref: '#/doc/components/schemas/post'
 *      
 */
router.get('/posts', postController.getAll)

/**
 * @swagger
 * /posts/id:
 *  get:
 *      summary: Get post by id
 *      tags:
 *          - posts
 *      description: Retrive post by id 
 *      responses:
 *          200:
 *              description: return a message and all post data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: Post found
 *                              data:
 *                                  $ref: '#/doc/components/schemas/post'
 *          404:
 *              description: return message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: Post not found
 */
router.get('/posts/:id', postController.getById)

/**
 * @swagger
 * /posts:
 *  post:
 *      summary: Create new post
 *      tags:
 *          - posts
 *      description: endpoint to create a post
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/doc/components/schemas/post'
 *      responses:
 *          201:
 *              description: return a message and data post
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: Post created
 *                              data:
 *                                  $ref: '#/doc/components/schemas/post'
 * 
 */
router.post('/posts', postController.post)

/**
 * @swagger
 * /posts/id:
 *  delete:
 *      summary: delete post
 *      tags:
 *          - posts
 *      description: endpoint to delete a post
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/post'
 *                      properties:
 *                          _id:
 *                              type: string
 *                              example: 6524cacdad03e6f697632ae0
 *      responses:
 *          201:
 *              description: return a message
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: Post deleted
 *          404:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/post'
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: post db not found
 *                              error:
 *                                  type: string
 *                                  example: message error   
 */
router.delete('/posts/:id', postController.delete)
//router.delete('/posts/:id', auth.authToken, postController.delete)

/**
 * @swagger
 * /posts/id:
 *  put:
 *      summary: Update post
 *      tags:
 *          - posts
 *      description: endpoint to update a post
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/post'
 *      responses:
 *          201:
 *              description: return a message and data post
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/post'
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: Post created
 *                              data:
 *                                  $ref: '#/components/schemas/post'
 *          404:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/post'
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: post db not found
 *                              error:
 *                                  type: string
 *                                  example: message error   
 */
router.put('/posts/:id', postController.put)
//router.put('/posts/:id', auth.authToken  ,postController.put)

