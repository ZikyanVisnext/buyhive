<template>
    <div class="search-parent">
        <div class="search-container">
            <div class="search-left">
                <p style="font-size: 18px;">Categories</p>
            </div>
            <div class="search-middle">
                <input class="search-middle-input" type="text" placeholder="What are you looking for?">
                <select class="search-select-all-categories">
                    <option>All Categories</option>
                    <option>PPE</option>
                    <option>Health & Medical</option>
                    <option>Garden & Outdoor</option>
                    <option>Sports & Fitness</option>
                    <option>Other</option>
                    <option>Baby</option>
                </select>
            </div>
            <div class="search-right">
                <button class="search-right-button">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{

}

</script>

<style>
.search-parent{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.search-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #F2F2F2;
    border-radius: 10px;
    padding: 10px 20px;
    align-items: center;
}
.search-middle-input{
    height: 15px;
    width: 900px;
    padding: 15px;
    border-radius: 50px;
    font-size: 18px;
    border: 1px solid #c8c5c5;
}
.search-right-button{
    border: 1px solid #47B3CA;
    background-color: #47B3CA;
    width: 120px;
    height: 40px;
    border-radius: 50px;
    color: #fff;
    font-size: 16px;
}
.search-select-all-categories{
    margin-left: -200px;
    font-size: 18px;
    background: rgba(0, 0, 0, 0);
    border: none;
}

</style>