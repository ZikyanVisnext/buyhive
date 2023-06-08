<template>
    <div class="left-filter-parent">

        <!-- Price Section -->

        <div class="left-filter-price-container">
            <p>Price</p>
            <div class="price-filter">
                <input type="number" value="0">
                <!-- <p>$</p> -->
                <p>&nbsp;-&nbsp;</p>
                <input type="numer" value="6900">
                <!-- <span>$</span> -->
            </div>
        </div>

        <!-- MOQ Section -->

        <div class="left-filter-moq-container">
            <p>MOQ</p>
            <div class="moq-filter">
                <input type="number" placeholder="Less than">
            </div>
        </div>

        <!-- Product Certification Section -->

        <div class="left-filter-cert-container">
            <p>Product Certification</p>
            <div class="left-filter-cert-container-inner">
                <div class="cert-filter">
                <input type="text" placeholder="Product Certifications...">
            </div>
            <div class="left-filter-cert-checkbox">
                <div class="left-filter-big-checkbox" v-for="item in proCert">
                    <input type="checkbox" >
                    <span>&nbsp; &nbsp; {{item}}</span>
                </div>
            </div>
            </div>
        </div>

        <!-- Supplier Certification -->

        <div class="left-filter-cert-container">
            <p>Supplier Certification</p>
            <div class="left-filter-cert-container-inner">
                <div class="cert-filter">
                <input type="text" placeholder="Supplier Certifications...">
            </div>
            <div class="left-filter-supply-checkbox">
                <div class="left-filter-big-checkbox" v-for="item in supCert">
                    <input type="checkbox" >
                    <span>&nbsp; &nbsp; {{item}}</span>
                </div>
            </div>
            </div>
        </div>

        <!-- Manufacturer Location -->

        <div class="left-filter-cert-container">
            <p>Manufacturer Location</p>
            <div class="left-filter-cert-container-inner">
                <div class="cert-filter">
                <input type="text" placeholder="Country/Region">
            </div>
            <div class="left-filter-cert-checkbox">
                <div class="left-filter-big-checkbox" v-for="item in location">
                    <input type="checkbox" >
                    <span>&nbsp; &nbsp; {{item}}</span>
                </div>
            </div>
            </div>
        </div>

        <div class="left-filter-stock">
            <p>Stock Availability</p>
            <div class="left-filter-stock-flex">
                <input type="checkbox">
                <img src="../assets/usa.png" width="25px">
                <span style="font-size: 14px;">&nbsp;in USA</span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return{
            proCert:['ASTM', 'CE', 'Certificate of Compliance',
            'Certificate of Conformity', 'EN', 'EPA', 'FCC', 'FDA', 'GB',
            'Green Clean Certificate', 'Intertek', 'ISO 11439:2000',
            'ISO 11439:2013', 'ROHS', 'SGS'],
            supCert:['DUNS', 'DRS', 'GMP', 'ISO 13485', 'ISO 9001', 'ISO 9001:2015'],
            location:['Australia', 'Canada', 'China', 'Hong Kong S.A.R', 'India',
            'Korea, Republic', 'United Kingdom', 'United States', 'Vietnam']
        }
    }
}
</script>

<style>
.left-filter-stock-flex{
    display: flex;
    align-items: center;
}
.left-filter-stock img{
    margin-left: 10px;
}
.left-filter-parent p{
    font-size: 18px;
}
.moq-filter input::-webkit-inner-spin-button{
    display: none;
}
.price-filter input::-webkit-inner-spin-button{
    display: none;
}
.left-filter-parent{
    border: 1px solid #c8c5c5;
    padding: 20px 10px;
    border-radius: 5px;
}
.left-filter-parent input{
    text-align: center;
}
.price-filter{
    display: flex;
    justify-content: center;
    align-items: center;
}
.price-filter input{
    border-radius: 50px;
    border: 1px solid #c8c5c5;
    background-color: #F2F2F2;
    width: 120px;
    height: 35px;
}
.moq-filter{
    display: flex;
    justify-content: center;
    align-items: center;
}
.moq-filter input{
    border-radius: 50px;
    border: 1px solid #c8c5c5;
    background-color: #F2F2F2;
    width: 250px;
    height: 35px;
}
.cert-filter{
    display: flex;
    justify-content: center;
    align-items: center;
}
.cert-filter input{
    border-radius: 50px;
    border: 1px solid #c8c5c5;
    background-color: #F2F2F2;
    width: 250px;
    height: 35px;
}
.cert-filter ::-webkit-input-placeholder {
  text-align: center;
}
.moq-filter ::-webkit-input-placeholder {
  text-align: center;
}
.left-filter-moq-container{
    margin-top: 20px;
}
.left-filter-cert-container{
margin-top: 20px;
}
.left-filter-cert-container-inner{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.left-filter-cert-checkbox{
    margin-top: 20px;
    height: 100px; 
    overflow-y: scroll;
    width: 90%;
    height: 170px;
}
.left-filter-cert-checkbox::-webkit-scrollbar{
    background-color: #DEDEDE;
    width: 5px;
}
.left-filter-cert-checkbox::-webkit-scrollbar-thumb{
    background-color: #5CB674;
}
.left-filter-cert-checkbox input{
    margin: 8px 0;
}

.left-filter-big-checkbox input[type='checkbox'] {
    width:20px;
    height:20px;
}
.left-filter-stock{
    margin-top: 30px;
}
.left-filter-stock input[type='checkbox'] {
    width:20px;
    height:20px;
    margin-left: 10px;
}
.left-filter-big-checkbox{
    display: flex;
    align-items: center;
}
.left-filter-supply-checkbox{
    margin-top: 20px;
    height: 100px; 
    width: 94%;
    height: 170px;
}
</style>