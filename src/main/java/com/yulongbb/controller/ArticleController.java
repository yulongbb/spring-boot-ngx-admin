package com.yulongbb.controller;

import com.yulongbb.dto.UserResponseDTO;
import com.yulongbb.model.Article;
import com.yulongbb.model.User;
import com.yulongbb.service.ArticleService;
import com.yulongbb.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Jeremy on 2019/5/31.
 */
@RestController
@RequestMapping("/api/v1/articles")
@Api(tags = "api")
@CrossOrigin("*")
public class ArticleController {


    @Autowired
    private ArticleService articleService;


    @GetMapping(value = "")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ApiOperation(value = "${UserController.search}", response = UserResponseDTO.class)
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 403, message = "Access denied"), //
            @ApiResponse(code = 404, message = "The user doesn't exist"), //
            @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
    public List<Article> articles() {
        return articleService.articles();
    }

}
