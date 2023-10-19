const express = require("express");
const router = express.Router();

const postController = require('../controllers/postsControllers')
//const auth = require('../middlewares/auth')


/**
 * @swagger
 * /posts/getAll:
 *  get:
 *      summary: get all posts from db
 *      tags:
 *          - posts
 *      description: endpoint to retrive post by id
 *      responses:
 *          200:
 *              description: post data in json and status message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties: 
 *                                      _id:
 *                                          type: string
 *                                          example: "9834jshd02ks72"
 *                                      titulo:
 *                                          type: string 
 *                                          example: "This is a title"
 *                                      description:
 *                                          type: string
 *                                          example: "This is a description"
 *                                      tags:
 *                                          type: string
 *                                          example: "tag1"
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          404:
 *              description: post data not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "post not found"
 */
router.get('/posts', postController.getAll)

/**
 * @swagger
 * /posts/{id}:
 *  get:
 *      summary: get post by id
 *      tags:
 *          - posts
 *      description: endpoint to retrive post by id
 *      responses:
 *          200:
 *              description: post data in json and status message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties: 
 *                                      _id:
 *                                          type: string
 *                                          example: "9834jshd02ks72"
 *                                      titulo:
 *                                          type: string 
 *                                          example: "This is a title"
 *                                      description:
 *                                          type: string
 *                                          example: "This is a description"
 *                                      tags:
 *                                          type: string
 *                                          example: "tag1"
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          404:
 *              description: post data not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "post not found"
 */
router.get('/posts/:id', postController.getById)

/**
 * @swagger
 * /posts/:
 *  post:
 *      summary: Create new product
 *      tags:
 *          - posts
 *      description: endpoint to create a post
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          _id:
 *                              type: string
 *                              example: "9834jshd02ks72"
 *                          titulo:
 *                              type: string 
 *                              example: "This is a title"
 *                          description:
 *                              type: string
 *                              example: "This is a description"
 *                          tags:
 *                              type: string
 *                              example: "tag1"
 *      responses:
 *          201:
 *              description: return a message and data product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: Product created
 *                              data:
 *                                  type: object
 *                                  properties: 
 *                                      _id:
 *                                          type: string
 *                                          example: "9834jshd02ks72"
 *                                      titulo:
 *                                          type: string 
 *                                          example: "This is a title"
 *                                      description:
 *                                          type: string
 *                                          example: "This is a description"
 *                                      tags:
 *                                          type: string
 *                                          example: "tag1"  
 */
router.post('/posts', postController.post)

/**
 * @swagger
 * /posts/{id}:
 *  delete:
 *      summary: delete post by id
 *      tags:
 *          - posts
 *      description: endpoint to delete post by id
 *      responses:
 *          200:
 *              description: post data in json and status message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          401:
 *              description: unauthorized user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "User not authorized"
 *          404:
 *              description: post data not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "post not found"
 */
router.delete('/posts/:id', postController.delete)
//router.delete('/posts/:id', auth.authToken, postController.delete)

/**
 * @swagger
 * /posts/{id}:
 *  put:
 *      summary: update post data by id
 *      tags: 
 *          - posts
 *      description: endpoint to update post data
 *      responses:
 *          200:
 *              description: post data in json and status message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          401:
 *              description: unauthorized user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "User not authorized"
 *          404:
 *              description: post data not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "post not found"
 *      
 */
router.put('/posts/:id', postController.put)
//router.put('/posts/:id', auth.authToken  ,postController.put)

module.exports = router

