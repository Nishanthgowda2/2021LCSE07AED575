// src/ProductsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const productsData = [
    {
        id: 1,
        name: "iPhone 13",
        company: "AMZ",
        category: "Phone",
        image: "https://images.macrumors.com/article-new/2024/02/iPhone-16-Camera-Lozenge-2-Perspective.jpg.",
        price: 99999
    },
    {
        id: 2,
        name: "Dell Laptop",
        company: "FLP",
        category: "Laptop",
        image: "https://p1-ofp.static.pub/medias/25470557089_82Y0AG_202211110235521678812798608.png",
        price: 129999
    },
    {
        id: 3,
        name: "Samsung TV",
        company: "SNP",
        category: "TV",
        image: "https://th.bing.com/th/id/OIP.6F_J5KDYJqPWiUuWIygz_wHaE8?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 1999
    },
    {
        id: 4,
        name: "Sony Earphone",
        company: "MYN",
        category: "Earphone",
        image: "https://th.bing.com/th/id/OIP.S6Qhg3tVT8BUTlGBpNiffwAAAA?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 99
    },
    {
        id: 5,
        name: "Apple Tablet",
        company: "AZO",
        category: "Tablet",
        image: "https://th.bing.com/th/id/OIP.kdTyWTQaNTiR8rixXtE-vAAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 799
    },
    {
        id: 6,
        name: "Logitech Mouse",
        company: "FLP",
        category: "Mouse",
        image: "https://th.bing.com/th/id/OIP.A3X-DUhH1kCEaiWmdHyOGgHaFd?w=253&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 29
    },
    {
        id: 7,
        name: "HP Keypad",
        company: "MYN",
        category: "Keypad",
        image: "https://th.bing.com/th/id/OIP.mEL7aKOYeqlLtjcPOpZMMQHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 49
    },
    {
        id: 8,
        name: "JBL Bluetooth",
        company: "SNP",
        category: "Bluetooth",
        image: "https://th.bing.com/th/id/OIP.ngPBrcDWMexDQr-TE-dg3AHaG_?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 99
    },
    {
        id: 9,
        name: "SanDisk Pendrive",
        company: "AZO",
        category: "Pendrive",
        image: "https://th.bing.com/th/id/OIP.BagpTrf6ofVsyCKU1H-H8gHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 19
    },
    {
        id: 10,
        name: "Sony Remote",
        company: "MYN",
        category: "Remote",
        image: "https://th.bing.com/th/id/OIP.i-lTYrxNvpIVLItozmhu6gAAAA?w=182&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        price: 29
    },
];

export default ProductsList;

