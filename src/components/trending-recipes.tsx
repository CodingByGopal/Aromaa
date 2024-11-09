import React from 'react'
import { RecipesService } from '@/services/recipes.service';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import SectionUi from './section-ui';

const TrendingRecipes = async () => {
    const data: RecipeResponseModel = await RecipesService.getAllRecipes();
    const recipes = data?.recipes.slice(0, 8);
    return (
        <SectionUi recipes={recipes} title='Trending Recipes' />
    )
}

export default TrendingRecipes