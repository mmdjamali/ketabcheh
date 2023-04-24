type props = {
    className : string
}

export const Educational = ({
    className 
} : props) => (
    <svg className={className} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.6436 0.0455136C20.5292 0.0719115 19.3061 0.476679 17.9246 0.96064C16.5431 1.4358 15.3992 1.83177 15.3816 1.83177C15.364 1.83177 15.2848 1.95496 15.2056 2.10455C15.0912 2.33333 15.0912 2.42132 15.1792 2.63251C15.2848 2.90528 15.496 3.06367 15.7335 3.06367C15.8127 3.06367 17.027 2.6677 18.4261 2.18374C20.1508 1.59419 21.1187 1.30381 21.3739 1.30381C21.6555 1.30381 24.3745 2.21014 31.2027 4.56835C36.3943 6.36341 40.6619 7.85049 40.6795 7.86809C40.6971 7.88569 40.6971 7.92088 40.6707 7.94728C40.6531 7.97368 39.2629 8.46644 37.5998 9.03839C35.9367 9.61915 34.5112 10.1119 34.432 10.1471C34.3177 10.1911 34.2825 10.1207 34.2473 9.79513C34.1857 9.25837 33.8337 8.75681 33.3673 8.53683C32.7074 8.22006 28.5365 7.6657 25.2984 7.45452C23.4681 7.34013 17.555 7.39293 16.0063 7.54251C12.909 7.84169 9.75002 8.31685 9.29246 8.55443C8.89649 8.75681 8.57092 9.24078 8.49173 9.72474C8.44773 10.0239 8.39493 10.1383 8.29814 10.1207C8.06936 10.0679 2.12104 8.00008 2.07704 7.94728C2.05064 7.92088 2.05064 7.88569 2.06824 7.86809C2.08584 7.85049 4.57604 6.97936 7.603 5.93224C10.8675 4.80593 13.1642 3.9612 13.2697 3.86441C13.6393 3.49484 13.3753 2.79969 12.865 2.79969C12.7242 2.79969 10.0844 3.67082 7.00464 4.73554C1.59308 6.60979 1.39069 6.68898 1.07392 7.02336C0.862736 7.23454 0.730747 7.46332 0.721947 7.61291C0.68675 8.31685 0.853937 8.76561 1.24111 9.02079C1.3643 9.10879 3.03616 9.71594 4.95441 10.3759L8.43893 11.5814L8.46533 14.8283L8.48293 18.0753L7.62939 18.2689C5.0952 18.8408 3.14175 20.7503 2.49061 23.2581C2.24423 24.2172 2.24423 25.6339 2.49061 26.6018C2.84258 27.9745 3.7841 29.4528 4.76962 30.2095C5.0248 30.3943 5.22719 30.5791 5.22719 30.6055C5.22719 30.6319 4.92801 30.7463 4.56724 30.8606C3.00976 31.3534 1.46109 32.7085 0.713148 34.2308C0.141194 35.3923 0.000405241 35.973 0.000405241 37.2929C-0.00839405 38.5688 0.123595 39.1584 0.642754 40.2407C1.63707 42.3173 3.51132 43.7164 5.75514 44.0596C6.2479 44.1388 10.9467 44.1564 23.8817 44.1388C40.0372 44.1124 41.3659 44.1036 41.6211 43.9628C41.9818 43.7604 42.4042 43.3204 42.5978 42.9333C42.809 42.4845 42.7914 41.6662 42.5538 41.1998C42.2546 40.6103 41.8499 40.3111 40.9963 40.0559C40.6971 39.9591 40.5828 39.6951 40.3716 38.6304C40.2132 37.7857 40.2132 36.7826 40.3892 35.8762C40.6004 34.7675 40.6883 34.5915 41.1195 34.5212C42.1138 34.354 42.9146 33.2365 42.7474 32.2421C42.589 31.2478 41.8762 30.5879 40.8467 30.4647L40.3716 30.4119L40.4068 29.9015C40.4508 29.2592 40.31 28.828 39.914 28.388C39.5444 27.9833 39.2277 27.7985 38.7261 27.7193L38.3565 27.6489L38.1541 26.9538C37.8022 25.7483 37.7934 24.1644 38.1365 22.9325L38.2333 22.6069L38.7173 22.8709L39.2101 23.1261H41.3835C43.2841 23.1261 43.5921 23.0997 43.9001 22.9589C44.56 22.6597 45 21.9646 45 21.2078C45 21.0494 44.648 20.0463 44.2169 18.964L43.4249 17.0106L43.7065 16.4386C43.9529 15.9546 43.9881 15.7787 43.9881 15.2067C43.9793 14.1156 43.4601 13.2709 42.501 12.8045L42.0082 12.5581V10.0239C42.0082 7.54251 42.0082 7.48092 41.8059 7.19934C41.7003 7.03215 41.4891 6.82977 41.3483 6.74178C41.1987 6.66258 39.0605 5.88825 36.5967 5.04351C30.5076 2.93168 27.9646 2.05175 25.1136 1.06623C23.7849 0.599869 22.5002 0.168704 22.2538 0.107109C21.8315 -0.00728213 21.0747 -0.03368 20.6436 0.0455136ZM25.4304 8.79201C28.2109 8.968 32.5666 9.54875 32.8306 9.75993C32.9186 9.83913 32.945 10.3583 32.945 12.1797V14.5028H30.7891C28.7477 14.5028 28.6245 14.5116 28.4573 14.6787C28.1933 14.9427 28.2197 15.4091 28.5101 15.6379C28.7301 15.8138 28.8533 15.8226 30.8419 15.8226H32.945V16.9666V18.1105H21.3739H9.80282V16.9666V15.8226H17.8894C25.9319 15.8226 25.9671 15.8226 26.2047 15.6379C26.4951 15.4091 26.5215 14.9427 26.2575 14.6787C26.0815 14.5028 25.9671 14.5028 17.9422 14.5028H9.80282L9.82042 12.1005L9.84682 9.70714L11.2459 9.46956C12.7946 9.21438 15.54 8.8976 17.1502 8.79201C18.7517 8.68642 23.8465 8.68642 25.4304 8.79201ZM40.6883 11.0094V12.6197L40.3628 12.7341C39.87 12.9101 39.0781 13.7548 38.9021 14.274C38.6293 15.0659 38.7261 16.0338 39.1397 16.641L39.3597 16.9578L39.1309 17.5297L38.9021 18.1105H36.5791H34.2649L34.2825 14.8459L34.3089 11.5814L37.4326 10.4903C39.1485 9.89192 40.5828 9.40796 40.6267 9.39916C40.6619 9.39916 40.6883 10.1207 40.6883 11.0094ZM42.0962 14.0804C43.1785 14.8283 42.6946 16.5266 41.4011 16.5266C40.0548 16.5266 39.562 14.7667 40.7059 14.0628C41.1107 13.8164 41.7179 13.8252 42.0962 14.0804ZM43.0026 19.4832C43.3721 20.4071 43.6801 21.2254 43.6801 21.3046C43.6801 21.3838 43.6009 21.5334 43.5041 21.6302C43.3369 21.7974 43.2137 21.8062 41.3747 21.8062C39.2541 21.8062 39.1045 21.771 39.1045 21.2958C39.1045 21.1814 39.4036 20.3455 39.7644 19.4392L40.4244 17.8025H41.3747H42.325L43.0026 19.4832ZM38.2685 19.6063C38.2421 19.7031 38.1189 20.0111 38.0046 20.2839L37.8022 20.7943L23.0722 20.8382L8.35094 20.8822L7.78778 21.0934C6.62627 21.5246 5.59676 22.5981 5.25358 23.7244C5.0512 24.3756 5.0512 25.4843 5.25358 26.1354C5.60556 27.2881 6.65267 28.3616 7.84058 28.7664C8.43013 28.9776 8.50932 28.9776 11.6155 28.9776C14.6248 28.9776 14.8096 28.9688 14.9856 28.8104C15.2144 28.5992 15.2408 28.0449 15.0208 27.8689C14.9064 27.7721 14.2201 27.7369 11.7035 27.7017C8.65011 27.6577 8.50932 27.6489 8.10456 27.4641C7.40061 27.1385 7.02224 26.7778 6.70547 26.1354C6.45909 25.6427 6.41509 25.4491 6.41509 24.9299C6.41509 24.4108 6.45909 24.2172 6.70547 23.7244C7.02224 23.0821 7.40941 22.7213 8.10456 22.4045C8.48293 22.2285 8.67651 22.2109 10.0228 22.2021H11.5187L11.5627 24.182C11.5891 25.2731 11.6419 26.2146 11.6771 26.2762C11.8795 26.5842 12.161 26.5666 13.2081 26.1706L14.2289 25.7835L15.232 26.1706C16.1295 26.5226 16.2527 26.5578 16.4639 26.4522C16.8863 26.2498 16.9302 26.0474 16.9302 24.0236V22.1581H26.9174C34.8456 22.1581 36.9046 22.1845 36.9046 22.2637C36.9046 22.3253 36.8255 22.7565 36.7287 23.2141C36.4999 24.3052 36.4999 25.5547 36.7287 26.6458C36.8255 27.1033 36.9046 27.5345 36.9046 27.5873C36.9046 27.6753 34.8984 27.7017 27.155 27.7017C16.2615 27.7017 17.0182 27.6577 17.0182 28.3088C17.0182 28.5376 17.0798 28.696 17.203 28.8104C17.379 28.9688 17.7046 28.9776 28.0614 29.004L38.7437 29.0216L38.9197 29.2504C39.1661 29.5671 39.1573 29.9455 38.8845 30.2095L38.6733 30.4295H23.5121C6.74947 30.4295 7.91977 30.4647 6.67907 29.8575C4.79602 28.9424 3.62571 27.0418 3.62571 24.9299C3.62571 22.8181 4.79602 20.9174 6.67907 20.0023C7.89337 19.404 6.74067 19.4392 23.2921 19.4392C38.2333 19.4304 38.3213 19.4304 38.2685 19.6063ZM15.5928 23.5572C15.6104 24.8155 15.6016 24.9035 15.4608 24.8419C14.2817 24.3756 14.1409 24.3668 13.3489 24.6923L12.8826 24.8859V23.522V22.1493L14.2289 22.1757L15.5664 22.2021L15.5928 23.5572ZM41.2075 31.9694C41.3043 32.0661 41.4099 32.2685 41.4451 32.4269C41.4891 32.6645 41.4539 32.7525 41.2339 32.9813L40.9699 33.2453H23.6881C8.58852 33.2453 6.3447 33.2629 5.85194 33.3772C3.37933 33.9668 2.05944 36.7122 3.14175 39.0088C3.56412 39.8975 4.20647 40.5399 5.1128 40.971L5.79914 41.2966L19.4556 41.323C33.0506 41.3406 33.121 41.3406 33.2969 41.1646C33.5609 40.9006 33.5345 40.4343 33.2441 40.2055L33.0066 40.0207H19.6492H6.2919L5.78154 39.8359C4.46165 39.3344 3.7577 37.7681 4.22407 36.3778C4.41765 35.8146 5.104 35.0843 5.68475 34.8203L6.15111 34.6091L16.8687 34.5827L27.5774 34.5651V36.4306C27.5774 38.4544 27.6214 38.6568 28.0438 38.8592C28.2549 38.9648 28.3781 38.9296 29.2845 38.5776L30.2876 38.1817L31.2027 38.5424C32.2498 38.956 32.549 38.9912 32.7866 38.7096C32.9274 38.5248 32.945 38.3224 32.945 36.5362V34.5651H36.1391H39.3333L39.1661 35.1987C38.9109 36.1226 38.9109 38.4632 39.1661 39.3784L39.3333 40.0207H37.5646C35.8927 40.0207 35.7695 40.0295 35.5496 40.2055C35.2856 40.4079 35.2416 40.839 35.444 41.1294C35.5672 41.2878 35.7255 41.2966 38.3037 41.3406C40.9787 41.3846 41.0403 41.3846 41.2339 41.5782C41.5243 41.8686 41.4979 42.3613 41.1811 42.6253L40.9435 42.8365L23.3273 42.8189L5.71115 42.7925L5.13919 42.5989C2.93937 41.8422 1.42589 39.8887 1.2939 37.6097C1.19711 36.0346 1.74267 34.6179 2.89537 33.4564C3.8545 32.4973 4.75202 32.031 6.06312 31.8374C6.3095 31.8022 14.2729 31.7758 23.7673 31.7846C40.9171 31.7934 41.0403 31.7934 41.2075 31.9694ZM31.6251 35.929V37.2929L31.1675 37.0993C30.4548 36.809 30.1996 36.809 29.5572 37.0641C29.2405 37.1873 28.9677 37.2929 28.9413 37.2929C28.9149 37.2929 28.8973 36.677 28.8973 35.929V34.5651H30.2612H31.6251V35.929Z" className="fill-inherit stroke-none"/>
    </svg>  
)

export const Novel = ({
    className 
} : props) => (
    <svg className={className} viewBox="0 0 45 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1183 0.0618467C14.8799 0.26825 13.7877 0.86166 12.8503 1.80768C11.4226 3.2611 11.0098 4.46512 11.0012 7.15697C11.0012 8.34379 11.0184 8.48139 11.1818 8.68779C11.3796 8.9458 11.801 8.9888 12.0848 8.791C12.231 8.67919 12.2568 8.51579 12.2998 6.95916C12.3428 5.72934 12.3944 5.12733 12.5062 4.78333C13.1943 2.57309 15.3271 1.09386 17.5717 1.28307C19.008 1.40347 20.298 2.13448 21.1236 3.2955C21.5622 3.91471 22.0094 5.06713 22.0094 5.60034C22.0094 6.09915 22.1642 6.57216 22.3534 6.67536C22.4566 6.72696 25.0711 6.76136 29.8699 6.76136H37.2317V8.08578V9.41021L36.9565 9.51341C33.8346 10.7518 31.1686 12.5321 28.9153 14.8713L28.0381 15.7829L25.9397 15.8087C24.0132 15.8345 23.8154 15.8517 23.652 15.9979C23.4284 16.2043 23.4026 16.7461 23.6176 16.9181C23.7208 17.0041 24.1766 17.0471 25.3807 17.0815L26.9975 17.1245L26.6105 17.7093C24.9937 20.1174 23.8756 22.7834 23.4198 25.2947C23.1876 26.6105 23.2048 28.7949 23.4542 30.0248L23.6434 30.9708L23.4456 31.6588L23.2478 32.3468L21.7686 32.3898C20.5044 32.4242 20.2722 32.4586 20.1432 32.5876C20.0142 32.7166 19.9798 32.9316 19.9626 33.9206L19.9282 35.1074L19.696 35.202C19.4122 35.3053 19.2488 35.6923 19.352 35.9847C19.395 36.0879 19.5412 36.2427 19.6874 36.3287C20.1862 36.6125 20.0658 36.7415 18.3457 37.7649C17.2535 38.4099 16.7117 38.7883 16.6257 38.9431C16.5311 39.1237 16.5053 39.6311 16.5053 41.291C16.5053 43.5012 16.5483 43.8108 16.8923 43.9484C17.0815 44.0172 29.6893 44.0172 29.8785 43.9484C30.2226 43.8108 30.2656 43.5012 30.2656 41.2996C30.2656 40.1385 30.2312 39.0979 30.1882 38.9775C30.128 38.8313 29.6377 38.4959 28.4681 37.7907C26.7051 36.7415 26.5847 36.6125 27.0835 36.3287C27.5909 36.0449 27.5909 35.3913 27.0921 35.202L26.8341 35.1074L26.8083 33.912C26.7739 32.3898 26.7739 32.3898 25.5183 32.3898C24.7443 32.3898 24.6669 32.3726 24.7099 32.235C25.2345 30.4892 25.5355 29.8786 26.4815 28.6229C26.7825 28.2101 27.5823 27.3329 28.2445 26.6621C29.9989 24.8991 31.332 23.7811 34.2646 21.6138C34.9268 21.1236 35.8642 20.341 36.3545 19.8766L37.2317 19.0424V22.0782C37.2317 25.5183 37.1801 25.9225 36.6555 26.9631C36.0879 28.0897 35.0902 28.9325 33.7916 29.3883C33.2584 29.5776 33.0692 29.5862 30.1968 29.6292C27.3157 29.6808 27.1523 29.6894 27.0319 29.8442C26.8513 30.0936 26.8771 30.5322 27.0921 30.7214C27.2641 30.8762 27.4447 30.8848 30.257 30.8848C33.654 30.8848 33.7744 30.8676 35.159 30.1882C36.8791 29.3367 38.1089 27.6425 38.4271 25.6731C38.4873 25.3549 38.5217 23.5488 38.5217 21.33V17.5373L38.8227 17.1417C39.8719 15.7743 41.1275 13.4867 41.8242 11.6806C42.194 10.7346 42.6498 9.1522 42.6498 8.8168C42.6498 8.53299 42.3574 8.22339 42.0908 8.22339C41.7468 8.22339 40.3449 8.48999 39.4333 8.7308L38.5217 8.9716V7.86218V6.76136H41.0587H43.6044L43.828 6.53776C44.043 6.32275 44.0516 6.27975 44 5.66054C43.8796 4.15552 43.3034 2.9343 42.1854 1.80768C41.3425 0.973462 40.7233 0.586456 39.5967 0.208049L38.9947 0.0102458L27.7715 0.00164569C21.5966 -0.00695446 16.3591 0.018846 16.1183 0.0618467ZM38.8915 1.38627C40.6975 1.76468 42.3402 3.4159 42.6154 5.11873L42.6756 5.47134H33.0004H23.3252L23.1876 4.80053C22.9382 3.65671 22.2244 2.40969 21.373 1.61847L20.9774 1.25727H29.6463C36.8447 1.25727 38.4013 1.28307 38.8915 1.38627ZM39.2871 10.1498C39.2699 10.167 38.8313 10.5368 38.3067 10.9754C35.4858 13.3405 32.7768 16.0667 30.386 18.9392L30.0333 19.3606L29.4141 18.1308L28.7949 16.9009L29.4055 16.2215C31.7706 13.5985 34.7118 11.672 38.2207 10.4422C39.0807 10.1412 39.3817 10.0638 39.2871 10.1498ZM40.7577 10.855C40.7577 10.8808 40.6201 11.2334 40.4481 11.6462C39.6999 13.4523 38.5561 15.4045 37.4209 16.8235L36.9049 17.4685L35.116 17.6147C34.127 17.6921 33.31 17.7437 33.2928 17.7265C33.2326 17.6663 36.2943 14.5961 37.4037 13.5985C38.7023 12.4203 40.6029 10.812 40.6975 10.8034C40.7319 10.8034 40.7577 10.8292 40.7577 10.855ZM28.5799 19.309L29.1733 20.5044L28.7433 21.0892C28.2101 21.8116 27.1695 23.3854 26.8513 23.9703C26.7137 24.2025 26.5847 24.3917 26.5589 24.3917C26.5331 24.3917 26.4213 23.6693 26.3095 22.7834L26.1031 21.1752L26.5159 20.384C26.9803 19.4982 27.8403 18.1136 27.9349 18.1136C27.9607 18.1136 28.2617 18.6554 28.5799 19.309ZM35.2106 19.2058C35.0214 19.3692 34.6 19.7218 34.2732 19.9884L33.6884 20.47L32.1318 20.7538C31.2718 20.9086 30.5666 21.0204 30.558 21.0118C30.5408 21.0032 30.8676 20.5732 31.2718 20.0658C31.9168 19.2574 32.0458 19.1456 32.278 19.137C32.4242 19.137 33.0864 19.0768 33.7486 19.0166C34.4108 18.9564 35.0902 18.9048 35.2536 18.9048L35.5546 18.8962L35.2106 19.2058ZM31.1686 22.319C31.117 22.362 30.7128 22.6974 30.2656 23.0672C29.8183 23.437 29.0529 24.0993 28.5713 24.5465C28.0811 24.9851 27.6855 25.3205 27.6855 25.2947C27.6855 25.2001 29.1561 22.8952 29.3281 22.7146C29.4399 22.6028 29.7409 22.4996 30.2484 22.405C31.16 22.2244 31.2718 22.2158 31.1686 22.319ZM25.3119 25.1829L25.4667 26.4987L24.9937 27.4877L24.5121 28.4767V27.7457C24.5035 27.3415 24.5465 26.6793 24.5895 26.2837C24.6927 25.4237 25.0195 23.8757 25.1055 23.8757C25.1313 23.8757 25.2345 24.4691 25.3119 25.1829ZM25.5183 34.385L25.4925 35.0988H23.3854H21.2784L21.2526 34.385L21.2268 33.6798H23.3854H25.5441L25.5183 34.385ZM25.5355 36.9307C25.5355 37.5241 25.5957 37.5929 26.5675 38.1605L27.2125 38.5389L25.3721 38.5819C23.5746 38.6249 23.5402 38.6249 23.3768 38.8313C23.1532 39.1065 23.1704 39.4075 23.4284 39.6569L23.6348 39.8719H26.3095H28.9755V41.291V42.71H23.3854H17.7953V41.291V39.8719H19.2918C20.6678 39.8719 20.7968 39.8547 21.0118 39.6913C21.1666 39.5709 21.2354 39.4333 21.2354 39.2355C21.2354 38.7367 21.0806 38.6335 20.2722 38.5819L19.5584 38.5389L20.2034 38.1605C21.1752 37.5929 21.2354 37.5241 21.2354 36.9307V36.4319H23.3854H25.5355V36.9307Z" className={"fill-inherit stroke-none"}/>
        <path d="M16.058 9.1694C15.8516 9.3844 15.8086 9.479 15.8516 9.66821C15.886 9.79721 15.9892 9.96921 16.0924 10.0466C16.2558 10.1928 16.5654 10.2014 19.9539 10.2014C23.5316 10.2014 23.652 10.1928 23.8154 10.0294C24.0992 9.74561 24.0734 9.3844 23.7638 9.1006L23.5488 8.91139H19.9367H16.316L16.058 9.1694Z" className={"fill-inherit stroke-none"}/>
        <path d="M25.7591 9.092C25.4753 9.3156 25.4495 9.77141 25.7075 10.0294C25.8709 10.1928 25.9913 10.2014 29.5775 10.2014H33.2842L33.4906 9.98641C33.611 9.87461 33.7056 9.71981 33.7056 9.65101C33.7056 9.4102 33.5164 9.1006 33.3014 9.006C33.1638 8.94579 31.9598 8.91139 29.5431 8.91139C26.0773 8.91139 25.9827 8.91999 25.7591 9.092Z" className={"fill-inherit stroke-none"}/>
        <path d="M11.3796 10.6487C11.2764 10.6917 11.1474 10.8293 11.0958 10.9411C11.027 11.0959 11.0012 13.0567 11.0012 17.6406V24.1337H5.6863H0.362806L0.165002 24.3487C-0.0156006 24.5465 -0.0242008 24.6067 0.0274001 25.2517C0.242404 27.8489 2.09144 30.0334 4.68008 30.7386C5.13589 30.859 6.1163 30.8762 13.3318 30.902L21.459 30.9364L21.6912 30.7558C21.9836 30.5236 22.0094 30.0678 21.7514 29.8098C21.5794 29.6378 21.4676 29.6378 15.7657 29.6378H9.94337L10.597 28.9584C11.0872 28.4424 11.3366 28.0898 11.6376 27.4791C12.3084 26.1203 12.2912 26.4041 12.2912 18.1824V10.8981L12.0676 10.7261C11.8182 10.5283 11.6548 10.5111 11.3796 10.6487ZM10.9066 25.7677C10.5196 27.4705 9.24676 28.8552 7.56113 29.3884C6.83012 29.6292 5.57449 29.6464 4.85208 29.4314C4.06087 29.1992 3.36426 28.7864 2.77945 28.2188C2.19464 27.6425 1.85923 27.1179 1.56683 26.3095C1.20562 25.3205 0.663811 25.4237 6.17651 25.4237H10.984L10.9066 25.7677Z" className={"fill-inherit stroke-none"}/>
        <path d="M16.058 12.6095C15.8516 12.8245 15.8086 12.9191 15.8516 13.1083C15.886 13.2373 15.9892 13.4093 16.0924 13.4867C16.2558 13.6329 16.6772 13.6415 22.3533 13.6415C28.0294 13.6415 28.4508 13.6329 28.6143 13.4867C28.7175 13.4093 28.8207 13.2373 28.8551 13.1083C28.8981 12.9191 28.8551 12.8245 28.6487 12.6095L28.3906 12.3515H22.3533H16.316L16.058 12.6095Z" className={"fill-inherit stroke-none"}/>
        <path d="M16.2903 15.8689C15.8689 16.0495 15.7399 16.5827 16.0323 16.9095C16.1785 17.0729 16.2903 17.0815 18.8618 17.0815C21.8976 17.0815 21.9234 17.0729 21.9234 16.4881C21.9234 16.2645 21.8632 16.1097 21.7428 15.9979C21.5708 15.8431 21.3816 15.8345 19.008 15.8173C17.6061 15.8087 16.3849 15.8345 16.2903 15.8689Z" className={"fill-inherit stroke-none"}/>
        <path d="M16.2903 19.309C15.8689 19.4896 15.7399 20.0228 16.0323 20.3496C16.1785 20.513 16.2903 20.5216 18.5693 20.5216C20.771 20.5216 20.9602 20.513 21.0892 20.3668C21.2956 20.1346 21.2784 19.6358 21.0548 19.438C20.8914 19.2832 20.7022 19.2746 18.664 19.2574C17.4513 19.2488 16.3849 19.2746 16.2903 19.309Z" className={"fill-inherit stroke-none"}/>
    </svg>
)

export const Historical  = ({
    className 
} : props) => (
    <svg className={className} viewBox="0 0 45 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.08341 0.0512772C1.27415 0.257896 0.594029 0.826096 0.223837 1.60092L0 2.07442V4.57106C0 6.94718 0.00860911 7.08492 0.1894 7.47233C0.464892 8.07497 0.998657 8.60012 1.6013 8.87562C2.0748 9.08224 2.20393 9.10806 2.8324 9.07363C3.8741 9.01336 4.62309 8.56569 5.11381 7.69617C5.24295 7.47233 5.3807 7.30876 5.40652 7.3432C5.49261 7.42068 5.484 36.7261 5.39791 36.7261C5.35487 36.7261 5.26017 36.5884 5.18269 36.4248C4.95024 35.9341 4.41648 35.4175 3.8741 35.1592C2.81518 34.6599 1.47216 34.9182 0.697338 35.7791C0.0172182 36.5367 0 36.6228 0 39.438C0 41.8743 0.00860911 41.9432 0.206619 42.3823C0.447674 42.9161 1.09336 43.5531 1.66156 43.8114C2.23837 44.0697 3.20259 44.0611 3.78801 43.8028C4.29595 43.5703 4.89859 43.0194 5.13103 42.5631L5.2946 42.2359H20.1798H35.0649L35.1166 42.4598C35.2199 42.8558 36.098 43.6478 36.6318 43.8372C38.0953 44.3366 39.6364 43.6392 40.1701 42.2359C40.3165 41.8485 40.3337 41.5644 40.3337 39.4552C40.3337 36.6228 40.3079 36.5195 39.5244 35.7274C38.8529 35.0645 38.3708 34.8837 37.4152 34.9354C36.4338 34.9957 35.702 35.4433 35.2371 36.2698C35.0305 36.64 34.953 36.7175 34.8927 36.6142C34.8583 36.5367 34.8325 34.3069 34.8411 31.6467L34.8669 26.8084L35.5556 26.5329C36.9761 25.9561 37.6735 25.4998 38.0953 24.8627C38.3364 24.5012 38.3622 24.4065 38.3278 23.9846C38.3106 23.7263 38.2675 23.4336 38.2331 23.3389C38.19 23.1926 38.3019 23.0893 38.9304 22.6932C39.3436 22.435 39.9721 21.927 40.3337 21.5741C41.1343 20.7906 41.4701 20.1536 41.5218 19.3615L41.5562 18.8191L42.0297 18.5523C42.6926 18.1735 43.4416 17.4072 43.7257 16.8218C44.1992 15.849 44.0873 14.4457 43.4244 13.0769C43.0283 12.2418 42.684 11.9319 42.176 11.9319C41.8833 11.9319 41.7025 12.0352 40.7642 12.7583C39.1542 14.0066 38.1298 14.902 36.3993 16.6152L34.8239 18.1562V12.8272C34.8239 9.9001 34.8583 7.44651 34.9013 7.38624C34.953 7.30015 35.0477 7.40346 35.2371 7.73922C35.702 8.56569 36.4338 9.01336 37.4152 9.07363C38.3708 9.12528 38.8529 8.94449 39.5244 8.28159C40.3079 7.48955 40.3337 7.38624 40.3337 4.55384C40.3337 2.44461 40.3165 2.16051 40.1701 1.7731C39.9118 1.10159 39.4728 0.619476 38.8099 0.292332C38.3106 0.0512772 38.147 0.00823212 37.5788 0.0168419C37.0536 0.0168419 36.8384 0.0598869 36.4424 0.257896C35.9172 0.507561 35.2027 1.21351 35.1166 1.56648L35.0649 1.7731H20.1798H5.2946L5.13103 1.44595C4.89859 0.99828 4.29595 0.438686 3.81384 0.223457C3.34895 0.0168419 2.53969 -0.0606422 2.08341 0.0512772ZM3.09928 1.91085C3.60722 2.1519 3.65887 2.38435 3.65887 4.51941C3.65887 6.56837 3.60722 6.86969 3.21981 7.14519C3.10789 7.22267 2.88405 7.28293 2.71187 7.28293C2.53969 7.28293 2.31585 7.22267 2.20393 7.14519C1.81652 6.86969 1.76487 6.56837 1.76487 4.51941C1.76487 2.39296 1.81652 2.1519 2.30724 1.91085C2.65161 1.73866 2.74631 1.73866 3.09928 1.91085ZM37.9662 1.89363C38.4913 2.11746 38.5258 2.29826 38.5258 4.57106C38.5258 6.31871 38.5086 6.64586 38.3794 6.85247C38.0867 7.3518 37.3808 7.4379 36.9675 7.03327L36.7179 6.7836V4.59689C36.7179 2.18634 36.7265 2.13468 37.2689 1.89363C37.6046 1.74727 37.6132 1.74727 37.9662 1.89363ZM34.8239 4.57106V5.47502H20.1453H5.46679V4.57106V3.6671H20.1453H34.8239V4.57106ZM33.0159 13.7914V20.2999L32.5166 20.9112C31.2597 22.4608 29.9942 24.2945 29.0988 25.8356C27.5061 28.5905 25.5002 33.4374 25.6552 34.152C25.7326 34.5136 26.1631 34.8321 26.5591 34.8321C26.7399 34.8321 26.9551 34.8063 27.0326 34.7804C27.222 34.703 27.4286 34.2725 27.7644 33.2394C28.169 31.9997 28.6253 30.8547 29.2021 29.6236L29.7014 28.5474L30.5624 28.2117C31.4233 27.8759 32.7835 27.4283 32.9385 27.4283C32.9815 27.4283 33.0159 29.2017 33.0159 32.0772V36.7261L20.1625 36.7089L7.31775 36.6831L7.29192 22.0906C7.28331 14.0669 7.29192 7.44651 7.31775 7.38624C7.34357 7.30876 10.0038 7.28293 20.1884 7.28293H33.0159V13.7914ZM42.1416 14.9623C42.2191 15.3927 42.2191 15.6166 42.1416 15.8404C41.9953 16.2881 41.2893 16.8907 40.4628 17.2781C40.0668 17.4675 39.6794 17.7 39.6019 17.8119C39.4383 18.0529 39.4383 18.5006 39.6105 18.8278C39.9635 19.5251 38.9735 20.5926 36.89 21.7549C35.9086 22.2972 35.7795 22.4436 35.7709 22.9343C35.7709 23.2528 35.8225 23.3648 36.0722 23.6144C36.2358 23.778 36.3735 23.9502 36.3735 23.9846C36.3735 24.131 35.857 24.4237 35.0219 24.7508C33.9802 25.1641 31.3113 26.0078 31.2425 25.9389C31.1133 25.8184 33.6875 22.3231 35.1768 20.584C37.2602 18.1649 41.7886 13.9636 41.9866 14.2735C42.0211 14.3338 42.09 14.6437 42.1416 14.9623ZM3.21981 36.8638C3.60722 37.1393 3.65887 37.4407 3.65887 39.4896C3.65887 41.6247 3.60722 41.8571 3.09928 42.0982C2.74631 42.2704 2.67743 42.2704 2.32446 42.0982C1.81652 41.8571 1.76487 41.6247 1.76487 39.4896C1.76487 37.4407 1.81652 37.1393 2.20393 36.8638C2.31585 36.7864 2.53969 36.7261 2.71187 36.7261C2.88405 36.7261 3.10789 36.7864 3.21981 36.8638ZM38.0351 36.8208C38.4913 37.0274 38.5258 37.2254 38.5258 39.438C38.5258 41.728 38.4913 41.8916 37.949 42.1154C37.5788 42.279 37.1483 42.1585 36.89 41.8313C36.7265 41.6247 36.7179 41.4869 36.7179 39.4208V37.2254L36.9675 36.9758C37.243 36.7089 37.6477 36.6486 38.0351 36.8208ZM34.8239 39.438V40.3419H20.1453H5.46679V39.438V38.534H20.1453H34.8239V39.438Z" className={"fill-inherit stroke-none"}/>
        <path d="M9.71968 10.1584C9.19453 10.3908 9.1687 10.5027 9.1687 12.3623C9.1687 14.2305 9.19453 14.3424 9.7369 14.5662C10.1415 14.7384 12.7587 14.7384 13.1719 14.5662C13.4733 14.4371 13.7315 14.0583 13.7315 13.7398C13.7315 13.4212 13.4733 13.0424 13.1719 12.9133C12.9739 12.8358 12.5521 12.7928 11.9236 12.7928H10.9766V11.8027C10.9766 10.6491 10.8733 10.3564 10.417 10.1584C10.064 10.012 10.0554 10.012 9.71968 10.1584Z" className={"fill-inherit stroke-none"}/>
        <path d="M17.0288 10.167C16.5467 10.3736 16.4865 10.6147 16.4865 12.3623C16.4865 14.1272 16.5467 14.351 17.0633 14.5662C17.4335 14.7298 17.8639 14.6093 18.1222 14.2821C18.2771 14.0755 18.2944 13.9378 18.2944 12.3709C18.2944 10.4855 18.2685 10.3822 17.7262 10.1584C17.3818 10.012 17.3732 10.012 17.0288 10.167Z" className={"fill-inherit stroke-none"}/>
        <path d="M23.5029 10.1584C23.0897 10.3392 22.9864 10.52 22.9433 11.2345L22.9003 11.8888L21.7553 11.9319C20.6275 11.9749 20.6017 11.9749 20.395 12.216C20.0076 12.6722 20.1626 13.3782 20.7136 13.6279C20.9288 13.7312 21.0752 13.8861 21.1699 14.0927C21.299 14.3855 21.7208 14.6868 21.9963 14.6868C22.2804 14.6868 22.6937 14.3855 22.8228 14.0841L22.9692 13.757L23.5976 13.7226C24.1572 13.6967 24.2605 13.6623 24.4672 13.4557C24.6996 13.2232 24.7082 13.1974 24.734 12.0266C24.7685 10.6491 24.6824 10.365 24.1917 10.1584C23.8387 10.012 23.8301 10.012 23.5029 10.1584Z" className={"fill-inherit stroke-none"}/>
        <path d="M27.1015 10.1756C26.8518 10.3047 26.5591 10.7352 26.5591 10.9849C26.5591 11.2431 26.8518 11.6736 27.1187 11.7941C27.5319 11.9921 30.2352 11.9921 30.6484 11.7941C30.9153 11.6736 31.208 11.2431 31.208 10.9849C31.208 10.7266 30.9153 10.2961 30.6484 10.1756C30.2352 9.97759 27.5061 9.97759 27.1015 10.1756Z" className={"fill-inherit stroke-none"}/>
        <path d="M28.0485 12.9219C27.7644 13.0424 27.5061 13.4298 27.5061 13.7398C27.5061 14.0583 27.7644 14.4371 28.0657 14.5662C28.4962 14.7384 30.2696 14.7298 30.6484 14.549C30.9153 14.4285 31.208 13.998 31.208 13.7398C31.208 13.4815 30.9153 13.051 30.6484 12.9305C30.2696 12.7497 28.4531 12.7411 28.0485 12.9219Z" className={"fill-inherit stroke-none"}/>
        <path d="M9.41831 17.6914C8.99646 18.1132 9.10838 18.8364 9.63354 19.1205C9.85737 19.241 10.1415 19.2582 11.5534 19.2324C13.1547 19.2066 13.2063 19.1979 13.4215 18.9999C13.8606 18.5867 13.7659 17.7774 13.2494 17.5364C13.1116 17.4761 12.4057 17.4417 11.3554 17.4417H9.66797L9.41831 17.6914Z" className={"fill-inherit stroke-none"}/>
        <path d="M15.9785 17.5794C15.6083 17.8377 15.5394 18.1907 15.5394 19.7231C15.5394 20.7648 15.5739 21.2297 15.66 21.4449C15.7891 21.7463 16.1679 22.0045 16.4864 22.0045C16.805 22.0045 17.1838 21.7463 17.3129 21.4449C17.3904 21.2469 17.4334 20.8251 17.4334 20.1966V19.2496H18.4235C19.5857 19.2496 19.8698 19.1463 20.0678 18.6728C20.2314 18.3026 20.1109 17.8721 19.7837 17.6139C19.5771 17.4589 19.4394 17.4417 17.8725 17.4417C16.4434 17.4417 16.1507 17.4675 15.9785 17.5794Z" className={"fill-inherit stroke-none"}/>
        <path d="M22.4525 17.545C22.0393 17.743 21.979 18.0443 22.0135 19.8264C22.0393 21.4277 22.0479 21.4794 22.2459 21.6946C22.6592 22.1337 23.4684 22.039 23.7095 21.5224C23.7697 21.3847 23.8042 20.6787 23.8042 19.6284V17.941L23.5545 17.6913C23.279 17.4245 22.8313 17.3642 22.4525 17.545Z" className={"fill-inherit stroke-none"}/>
        <path d="M27.9624 17.545C27.5492 17.743 27.4889 18.0443 27.5234 19.8264C27.5492 21.4277 27.5578 21.4794 27.7558 21.6946C28.1691 22.1337 28.9783 22.039 29.2194 21.5224C29.271 21.4019 29.3141 20.8509 29.3141 20.2827V19.2496H29.8737C30.571 19.2496 30.9154 19.086 31.0875 18.6728C31.2511 18.3026 31.1306 17.8721 30.8034 17.6139C30.6054 17.4589 30.4591 17.4417 29.3657 17.4503C28.7028 17.4503 28.0657 17.4933 27.9624 17.545Z" className={"fill-inherit stroke-none"}/>
        <path d="M9.41842 20.4463C9.01379 20.8595 9.09988 21.5655 9.59921 21.8582C9.78861 21.9787 10.0727 22.0045 10.9767 22.0045C11.8806 22.0045 12.1647 21.9787 12.3541 21.8582C12.8535 21.5655 12.9395 20.8595 12.5349 20.4463L12.2853 20.1966H10.9767H9.66808L9.41842 20.4463Z" className={"fill-inherit stroke-none"}/>
        <path d="M9.58194 24.9058C9.20314 25.1468 9.1687 25.3449 9.1687 27.1356V28.8229L9.41837 29.0726L9.66803 29.3223H11.3554C12.4057 29.3223 13.1117 29.2878 13.2494 29.2276C13.6885 29.0209 13.7487 28.7455 13.7143 26.9375C13.6885 25.3362 13.6799 25.2846 13.4819 25.0694C13.0686 24.6303 12.2594 24.725 12.0183 25.2415C11.9667 25.3621 11.9236 25.9131 11.9236 26.4813V27.5144H11.4587H10.9938L10.9594 26.3952C10.9336 25.3276 10.925 25.2674 10.7097 25.0521C10.4256 24.768 9.90048 24.6992 9.58194 24.9058Z" className={"fill-inherit stroke-none"}/>
        <path d="M18.7592 24.923C18.3632 25.1641 18.2943 25.474 18.2943 27.0581C18.2943 28.5733 18.3632 28.9262 18.7334 29.1845C18.9916 29.3653 19.491 29.3653 19.7493 29.1845C20.1194 28.9262 20.1883 28.5733 20.1883 27.0408C20.1883 25.4395 20.1108 25.1124 19.6804 24.8972C19.336 24.7164 19.0863 24.725 18.7592 24.923Z" className={"fill-inherit stroke-none"}/>
        <path d="M22.5559 24.8369C22.4612 24.88 22.3063 25.0005 22.2116 25.1038C22.0566 25.276 22.0394 25.4396 22.0135 26.9462C21.9705 29.3137 21.9791 29.3223 23.8817 29.3223C24.9493 29.3223 25.0956 29.305 25.2936 29.1501C25.6208 28.8918 25.7413 28.4614 25.5777 28.0912C25.4055 27.6779 25.0612 27.5144 24.3638 27.5144H23.8042V26.4813C23.8042 25.87 23.7612 25.3621 23.7009 25.2329C23.5287 24.8455 22.995 24.6647 22.5559 24.8369Z" className={"fill-inherit stroke-none"}/>
        <path d="M15.9785 25.8442C15.6427 26.0852 15.5394 26.4726 15.5394 27.5144C15.5394 28.866 15.7805 29.3223 16.4864 29.3223C17.1924 29.3223 17.4334 28.866 17.4334 27.5144C17.4334 26.1627 17.1924 25.7064 16.4864 25.7064C16.3142 25.7064 16.0904 25.7667 15.9785 25.8442Z" className={"fill-inherit stroke-none"}/>
    </svg>
)

export const Scientific  = ({
    className 
} : props) => (
    <svg className={className} viewBox="0 0 40 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M-2.41624 0.13002C-2.70734 0.224201 -2.9642 0.395439 -3.28955 0.712231C-4.07725 1.50849 -4.00875 -0.272392 -4.00875 19.557C-4.00875 38.9155 -4.05156 37.5456 -3.44366 38.2476C-3.27243 38.4531 -2.93851 38.7185 -2.69022 38.847L-2.25356 39.0781H2.5668H7.39571L7.64401 38.7956C7.781 38.6415 7.8923 38.4189 7.8923 38.299C7.8923 38.025 7.68682 37.6226 7.48989 37.5284C7.40427 37.4856 5.23811 37.4343 2.68666 37.4086L-1.97102 37.3658L-2.13369 37.1603C-2.29637 36.9634 -2.29637 36.5609 -2.29637 19.5399V2.12494L-2.08232 1.91946L-1.87683 1.70541H8.5687H19.0142L19.0399 3.94863C19.0656 6.08055 19.0742 6.21754 19.254 6.55145C19.4937 7.00523 19.8875 7.39908 20.3413 7.63881C20.6752 7.81861 20.8122 7.82718 22.9441 7.85286L25.1874 7.87855V9.86491V11.8513L21.8397 15.1904C19.9988 17.0312 18.4406 18.6323 18.3721 18.7607C18.1666 19.1546 18.218 19.4799 18.5519 19.8395L18.843 20.1563L17.1991 21.8002C15.6151 23.3927 15.5552 23.4612 15.5552 23.7951C15.5552 24.1291 15.6151 24.189 17.396 25.9784L19.2283 27.8107L15.8891 27.8364L12.5585 27.862L12.0705 28.1018C11.5482 28.3586 11.1715 28.7354 10.8718 29.3004C10.5893 29.8227 10.5893 30.9529 10.8804 31.5009C11.1544 32.0231 11.5311 32.417 12.0448 32.6824L12.4729 32.9136L15.5124 32.9564L18.5519 32.9992L19.1341 33.4187C20.855 34.6516 22.2849 35.2681 24.5452 35.7561L24.8877 35.8332V36.5952V37.3658L19.5964 37.4086L14.2966 37.4514L14.0911 37.6911C13.7315 38.1106 13.86 38.7528 14.3565 38.9925C14.5963 39.1038 15.1871 39.121 18.432 39.121H22.2335L21.891 39.3436C20.7352 40.1141 19.9646 41.4669 19.9646 42.7341C19.9646 43.1793 19.9903 43.2735 20.2129 43.4961L20.4612 43.7444H29.8536H39.246L39.4943 43.4961C39.7169 43.2735 39.7426 43.1793 39.7426 42.7341C39.7426 41.6895 39.169 40.4737 38.3213 39.7288C37.5679 39.0696 36.7203 38.7357 35.5302 38.6415L34.7767 38.5901V36.2613C34.7767 34.977 34.7425 33.804 34.6911 33.6413C34.614 33.3674 34.6226 33.3331 34.888 33.1362C35.0336 33.0249 35.573 32.5197 36.0696 32.0146C37.8162 30.2508 38.9378 28.1703 39.5029 25.6702C39.6741 24.8911 39.6998 24.5571 39.6998 22.9818C39.6912 21.4492 39.6656 21.0639 39.5114 20.3532C38.9977 18.0843 38.1158 16.312 36.6175 14.5397L35.9839 13.7948L36.1809 13.615C36.3692 13.4352 36.3863 13.4352 36.9086 13.5637C37.3367 13.675 37.5251 13.6835 37.8932 13.6065C38.5097 13.478 39.0919 13.0928 39.4001 12.6047C39.8539 11.8941 39.931 11.329 39.6912 10.5156C39.5628 10.079 39.4001 9.89916 36.5918 7.07373C33.2527 3.71746 33.1499 3.6404 32.1653 3.6404C31.4547 3.64896 31.0865 3.78595 30.5814 4.2483C29.905 4.84763 29.6224 5.92643 29.905 6.75694L30.0077 7.03092L28.4495 8.58918L26.8997 10.1389V8.48644C26.8997 7.21928 26.8741 6.78262 26.7799 6.60282C26.6258 6.32028 20.5126 0.224201 20.2471 0.0872116C20.1187 0.0187149 16.9251 -0.00696945 9.03104 0.00159073C-0.515492 0.00159073 -2.05664 0.0187149 -2.41624 0.13002ZM22.5589 6.14048C20.6838 6.17473 20.7865 6.26891 20.7523 4.39385L20.7352 2.94689L22.3191 4.53084L23.9031 6.1148L22.5589 6.14048ZM35.3161 8.19534C37.7477 10.6355 38.1158 11.0379 38.1158 11.2519C38.1073 11.68 37.6878 12.0396 37.3196 11.9369C37.2169 11.9026 35.8726 10.6184 34.3315 9.08578C31.6602 6.42302 31.5232 6.26891 31.5232 5.96924C31.5232 5.72951 31.5746 5.60964 31.7543 5.47265C32.2167 5.11305 32.2852 5.17299 35.3161 8.19534ZM33.1243 10.2844C34.1774 11.3376 35.0336 12.228 35.0336 12.2794C35.0336 12.3307 32.6105 14.7966 29.6396 17.759L24.2456 23.153L22.2763 21.1838L20.3071 19.2145L25.7182 13.8034C28.6977 10.8238 31.155 8.3837 31.1807 8.3837C31.2064 8.3837 32.0797 9.23989 33.1243 10.2844ZM35.2904 15.61C36.6346 17.1425 37.5765 19.1546 37.9104 21.1838C38.0131 21.8345 38.0388 22.3653 38.0045 23.4099C37.9361 25.2763 37.6449 26.4408 36.8316 28.0761C36.2665 29.1977 35.6586 30.0282 34.7168 30.9786L33.9205 31.7748L33.2955 31.1926C32.953 30.8673 32.5335 30.5248 32.3537 30.4306C32.1824 30.3364 32.0369 30.2423 32.0369 30.2166C32.0369 30.1909 32.1739 30.0796 32.3366 29.9683C32.7647 29.6772 33.7493 28.6155 34.1774 27.9905C34.6911 27.2285 35.1791 26.1497 35.436 25.1822C35.6329 24.463 35.6586 24.1804 35.6671 23.0246C35.6671 21.9372 35.6329 21.5605 35.4788 20.944C35.1277 19.5313 34.4685 18.2556 33.5095 17.134L33.1243 16.6802L33.9291 15.8668C34.3657 15.4216 34.7596 15.0706 34.7938 15.0791C34.8195 15.0962 35.0507 15.3274 35.2904 15.61ZM32.2338 18.2898C32.9273 19.0775 33.5267 20.2077 33.8006 21.2694C34.0147 22.0999 34.0147 23.9578 33.8006 24.7369C33.227 26.8175 31.8742 28.4956 30.0248 29.4289C29.4769 29.7029 28.0984 30.0881 27.3535 30.1738L26.8997 30.2251V26.5606V22.8961L29.357 20.4389C30.7184 19.0775 31.8485 17.973 31.8913 17.973C31.9256 17.973 32.0797 18.11 32.2338 18.2898ZM21.1033 22.4081L22.1051 23.4099L20.8807 24.6342L19.6649 25.85L18.6375 24.8226L17.6101 23.7951L18.8087 22.5965C19.468 21.9372 20.0245 21.3978 20.0502 21.3978C20.0759 21.3978 20.5468 21.8516 21.1033 22.4081ZM23.6205 24.9082C24.0229 25.2678 24.4682 25.2592 24.8877 24.8996L25.1874 24.6342V27.3055V29.9768L24.9134 29.9169C24.3825 29.797 24.2541 29.7114 24.0914 29.3347C23.8688 28.8381 23.3123 28.2816 22.7986 28.0504C22.4732 27.8963 22.1993 27.862 21.2489 27.8364L20.093 27.8021L21.677 26.2267C22.5503 25.362 23.2781 24.6513 23.2952 24.6513C23.3123 24.6513 23.4579 24.7626 23.6205 24.9082ZM22.3277 29.8227C22.653 30.1481 22.6958 30.4221 22.4904 30.8073C22.4219 30.9443 22.2592 31.0899 22.1308 31.1498C21.951 31.2183 20.6581 31.244 17.319 31.2269L12.7555 31.2012L12.55 30.9615C12.1904 30.5419 12.3188 29.9083 12.8154 29.6344C12.9353 29.5659 14.3908 29.5402 17.5073 29.5316H22.0366L22.3277 29.8227ZM24.6651 31.6207C24.9305 31.6892 25.2901 31.7663 25.4613 31.792L25.7867 31.8519L25.5384 32.2971C25.2987 32.7166 25.0932 33.2817 24.9733 33.8468C24.9305 34.0694 24.9048 34.0866 24.6137 34.0266C24.0144 33.9153 22.8756 33.5557 22.2678 33.2817L21.6599 33.0078L22.1907 32.905C22.8928 32.7595 23.4065 32.4427 23.7918 31.9204C23.9716 31.6892 24.1257 31.5009 24.1428 31.5009C24.1599 31.5009 24.3997 31.5522 24.6651 31.6207ZM31.1978 31.7748C31.8742 32.0916 32.4136 32.6139 32.7475 33.2903L33.0215 33.8468L33.0472 36.227L33.0729 38.6072H29.8536H26.6343L26.66 36.227C26.6857 33.8639 26.6857 33.8554 26.9083 33.3759C27.4991 32.1259 28.5608 31.4923 30.0248 31.5265C30.5642 31.5437 30.8125 31.595 31.1978 31.7748ZM36.3178 40.4823C36.8401 40.6963 37.3538 41.0988 37.6107 41.5012C37.7477 41.7152 37.859 41.9293 37.859 41.9635C37.859 41.9978 34.2544 42.032 29.8536 42.032C25.4528 42.032 21.8482 41.9978 21.8482 41.9635C21.8482 41.9293 21.9595 41.7152 22.0965 41.5012C22.4647 40.9275 23.1239 40.5165 23.9031 40.3796C24.0229 40.3539 26.797 40.3453 30.0676 40.3539C34.9394 40.3624 36.0696 40.3881 36.3178 40.4823Z"  className={"fill-inherit stroke-none"}/>
        <path d="M29.2629 34.4633C29.0917 34.6431 29.0403 34.78 29.0403 35.054C29.0403 35.5592 29.3485 35.8674 29.8537 35.8674C30.3588 35.8674 30.667 35.5592 30.667 35.054C30.667 34.5489 30.3588 34.2406 29.8537 34.2406C29.5797 34.2406 29.4427 34.292 29.2629 34.4633Z"  className={"fill-inherit stroke-none"}/>
        <path d="M2.72944 10.3615C2.54107 10.4728 2.32703 10.8838 2.32703 11.1578C2.32703 11.2777 2.43833 11.5003 2.57532 11.6544L2.82362 11.9369H11.4455H20.0673L20.3156 11.6544C20.581 11.3547 20.6238 11.0893 20.4612 10.7383C20.2385 10.2502 20.6238 10.2673 11.3855 10.2673C5.76891 10.2759 2.83218 10.3016 2.72944 10.3615Z"  className={"fill-inherit stroke-none"}/>
        <path d="M2.62674 14.574C2.48119 14.6938 2.38701 14.8822 2.35276 15.1134C2.30995 15.4216 2.3442 15.5072 2.56681 15.7555L2.82367 16.0466H10.7177H18.6118L18.8601 15.7641C19.2026 15.3874 19.2026 14.9678 18.8601 14.6254L18.6118 14.3771H10.7263H2.84935L2.62674 14.574Z"  className={"fill-inherit stroke-none"}/>
        <path d="M2.62674 18.6836C2.48119 18.8035 2.38701 18.9919 2.35276 19.223C2.30995 19.5313 2.3442 19.6169 2.56681 19.8652L2.82367 20.1563L9.4249 20.182C15.2213 20.1991 16.0604 20.182 16.283 20.0707C16.5227 19.9508 16.7967 19.557 16.7967 19.3429C16.7967 19.1117 16.5142 18.6751 16.3172 18.5809C16.1631 18.5124 14.2538 18.4867 9.47627 18.4867H2.84935L2.62674 18.6836Z"  className={"fill-inherit stroke-none"}/>
        <path d="M2.62674 22.7934C2.48119 22.9133 2.38701 23.1016 2.35276 23.3328C2.30995 23.641 2.3442 23.7266 2.56681 23.9749L2.82367 24.266H7.27586C11.6424 24.266 11.7366 24.266 11.9678 24.0862C12.413 23.7609 12.4473 23.2044 12.0448 22.802L11.8394 22.5965H7.34436H2.84935L2.62674 22.7934Z"  className={"fill-inherit stroke-none"}/>
        <path d="M2.57534 26.9545C2.23286 27.297 2.23286 27.7165 2.57534 28.0932L2.82363 28.3758L5.38365 28.4015C6.7878 28.4186 8.09777 28.41 8.2947 28.3758C9.06527 28.2645 9.36493 27.4768 8.84266 26.9545L8.59436 26.7062H5.709H2.82363L2.57534 26.9545Z"  className={"fill-inherit stroke-none"}/>
        <path d="M10.281 37.7425C10.1012 37.9308 10.0327 38.0764 10.0327 38.3076C10.0327 38.7442 10.4094 39.1209 10.8461 39.1209C11.2485 39.1209 11.454 39.0011 11.6252 38.6757C12.0619 37.8281 10.966 37.0661 10.281 37.7425Z"  className={"fill-inherit stroke-none"}/>
    </svg>
)

