let walletBalance = 125.5;
document.querySelector('.wallet-balance').innerHTML = walletBalance.toFixed(3)
let vehicles = [
    {
        id: 1,
        name: "ferocious z2",
        status: "insured",
        period: "10 months",
        crashes: 4,
        price: 100.000,
        insuredAmount: 12000,
        destroyed: false,
        imageUrl: "images/bmw.png"
    },
    {
        id: 2,
        name: "ferocious storm",
        status: "insured",
        period: "5 months",
        crashes: 5,
        price: 110.000,
        insuredAmount: 12000,
        destroyed: false,
        imageUrl: "images/dodge.png"
    },
    {
        id: 3,
        name: "almatador x5",
        status: "uninsured",
        crashes: 10,
        destroyed: false,
        price: 123.700,
        imageUrl: "images/acura.png"
    },
    {
        id: 4,
        name: "speed x",
        status: "insured",
        period: "8 months",
        crashes: 15,
        price: 234.800,
        insuredAmount: 12.000,
        destroyed: false,
        imageUrl: "images/chevrolet.png"
    },
    {
        id: 5,
        name: "xtasy infiniti",
        status: "uninsured",
        crashes: 2,
        price: 347.000,
        destroyed: false,
        imageUrl: "images/bmw.png"
    },
    {
        id: 6,
        name: 'red flash',
        status: 'uninsured',
        crashes: 4,
        price: 745.200,
        imageUrl: 'images/acura.png',
        destroyed: true,
        claim: false
    },
    {
        id: 7,
        name: 'tesla x',
        status: 'insured',
        crashes: 4,
        price: 560.000,
        imageUrl: 'images/chevrolet.png',
        destroyed: true,
        insuredAmount: 13000,
        period: '12 months',
        claim: false
    }
]
let notifications = [
    {
        status: 'approved',
        name: 'blaster boom',
        refund: 3.500
    },
    {
        status: 'unapproved',
        name: 'ferocious storm'
    },
    {
        status: 'destroyed',
        name: 'ferocious x2',
        refund: 3.500
    },
    {
        status: 'approved',
        name: 'ferocious storm',
        refund: 3.500
    },
    {
        status: 'approved',
        name: 'ferocious storm',
        refund: 3.500
    },
    {
        status: 'approved',
        name: 'ferocious storm',
        refund: 3.500
    },
]
const insurancePremium = 0.052;
const refund = 0.025;
let destroyedVehicles = vehicles.filter((veh) => veh.destroyed === true);
let availableVehicles = vehicles.filter((veh) => veh.destroyed === false);
let vehiclesCont = document.querySelector('.vehicles');
let selected = '';
const viewInsuranceDetails = (id) => {
    selected = vehicles.filter((veh) => veh.id === id);
    let active = document.querySelector(`.vehicle-${id}`)
    active.classList.add('active');
    let siblings = Array.from(active.parentElement.children).filter((item) => item !== active);
    siblings.map((item) => {
        item.classList.remove('active')
    })
    const {status, period, crashes, name, price, insuredAmount, destroyed, claim} = selected[0];
    document.querySelector('.vehicle-name span').innerHTML = name.split(' ')[0];
    document.querySelector('.vehicle-name b').innerHTML = name.split(' ')[1]
    document.querySelector('.insurance-details').innerHTML = `
    ${status === 'insured' ?
        `
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_16860_3796)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.22 2.65954C14.6585 2.4738 15.1375 2.44958 15.5889 2.59035L15.78 2.65954L23.5578 5.96179C23.9521 6.12922 24.2964 6.42009 24.5503 6.8005C24.8043 7.18092 24.9575 7.63522 24.9922 8.11046L25 8.31803V15.0647C25 17.1032 24.5138 19.1038 23.5929 20.8555C22.672 22.6072 21.3504 24.0448 19.7678 25.0167L19.4722 25.1916L15.7456 27.3013C15.5404 27.4173 15.3162 27.4841 15.0872 27.4975C14.8581 27.5109 14.6291 27.4707 14.4144 27.3793L14.2544 27.3013L10.5278 25.1916C8.91735 24.2799 7.55419 22.8928 6.58223 21.1768C5.61026 19.4608 5.06553 17.4795 5.00556 15.4421L5 15.0647V8.31803C5.00001 7.84141 5.11959 7.37459 5.34482 6.97193C5.57005 6.56927 5.89166 6.24732 6.27222 6.04356L6.44222 5.96179L14.22 2.65954ZM18.8144 10.7535L13.7056 16.5378L11.7411 14.3137C11.5326 14.0778 11.2499 13.9453 10.9552 13.9454C10.6604 13.9456 10.3778 14.0782 10.1694 14.3143C9.9611 14.5503 9.84412 14.8704 9.84422 15.2041C9.84432 15.5379 9.96151 15.8578 10.17 16.0937L12.8411 19.118C12.9546 19.2465 13.0894 19.3485 13.2377 19.4181C13.386 19.4877 13.545 19.5235 13.7056 19.5235C13.8661 19.5235 14.0251 19.4877 14.1734 19.4181C14.3217 19.3485 14.4565 19.2465 14.57 19.118L20.3856 12.5323C20.4917 12.4163 20.5763 12.2775 20.6346 12.124C20.6928 11.9705 20.7234 11.8054 20.7247 11.6384C20.726 11.4714 20.6979 11.3057 20.642 11.1511C20.5862 10.9965 20.5037 10.856 20.3993 10.7379C20.295 10.6198 20.1709 10.5264 20.0344 10.4631C19.8978 10.3999 19.7515 10.3681 19.604 10.3695C19.4565 10.371 19.3107 10.4057 19.1751 10.4716C19.0395 10.5375 18.9169 10.6334 18.8144 10.7535Z" fill="#2FC0A7"/>
                </g>
                <defs>
                <clipPath id="clip0_16860_3796">
                <rect width="30" height="30" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span></span>
            <div>
                <h4>INSURANCE</h4>
                <p>${insuredAmount}</p>
            </div>
        </section>
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M6.25 27.5C5.5625 27.5 4.97375 27.255 4.48375 26.765C3.99375 26.275 3.74917 25.6867 3.75 25V7.5C3.75 6.8125 3.995 6.22375 4.485 5.73375C4.975 5.24375 5.56334 4.99917 6.25 5H7.5V2.5H10V5H20V2.5H22.5V5H23.75C24.4375 5 25.0263 5.245 25.5163 5.735C26.0063 6.225 26.2508 6.81333 26.25 7.5V25C26.25 25.6875 26.005 26.2763 25.515 26.7663C25.025 27.2563 24.4367 27.5008 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25Z" fill="#2FC0A7"/>
            </svg>
            <span></span>
            <div>
                <h4>PERIOD</h4>
                <p>${period}</p>
            </div>
        </section>
        `
        :
        `
        <section>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_16779_4594)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.78 2.66008L23.5578 5.96235C23.9815 6.14216 24.3466 6.46411 24.6043 6.88517C24.862 7.30622 25.0001 7.80632 25 8.3186V15.0653C25 17.168 24.4829 19.2291 23.5066 21.0177C22.5303 22.8064 21.1333 24.2519 19.4722 25.1923L15.7456 27.3007C15.5141 27.4318 15.2588 27.5 15 27.5C14.7412 27.5 14.4859 27.4318 14.2544 27.3007L10.5278 25.191C8.86671 24.2506 7.46974 22.8051 6.49341 21.0165C5.51708 19.2278 4.99996 17.1667 5 15.064V8.31986C4.99972 7.80736 5.13767 7.30699 5.39541 6.88568C5.65315 6.46438 6.01837 6.14224 6.44222 5.96235L14.22 2.66008C14.7229 2.44664 15.2771 2.44664 15.78 2.66008ZM15 17.5109C14.7053 17.5109 14.4227 17.6434 14.2143 17.8793C14.006 18.1152 13.8889 18.4352 13.8889 18.7689C13.8889 19.1025 14.006 19.4225 14.2143 19.6584C14.4227 19.8943 14.7053 20.0269 15 20.0269C15.2947 20.0269 15.5773 19.8943 15.7857 19.6584C15.994 19.4225 16.1111 19.1025 16.1111 18.7689C16.1111 18.4352 15.994 18.1152 15.7857 17.8793C15.5773 17.6434 15.2947 17.5109 15 17.5109ZM15 8.70481C14.7279 8.70485 14.4652 8.81797 14.2618 9.02272C14.0584 9.22748 13.9285 9.50961 13.8967 9.81563L13.8889 9.96281V14.9948C13.8892 15.3155 13.9976 15.6239 14.1921 15.857C14.3865 16.0902 14.6522 16.2305 14.9349 16.2493C15.2176 16.2681 15.496 16.1639 15.7131 15.9581C15.9303 15.7523 16.0699 15.4604 16.1033 15.142L16.1111 14.9948V9.96281C16.1111 9.62917 15.994 9.30919 15.7857 9.07327C15.5773 8.83735 15.2947 8.70481 15 8.70481Z" fill="#E86B61"/>
                </g>
                <defs>
                <clipPath id="clip0_16779_4594">
                <rect width="30" height="30" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span></span>
            <div>
                <h4 class="red">UNINSURED</h4>
            </div>
        </section>
        `
    }
    
    <section>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M2.1197 21.8872C2.21517 22.3019 2.41801 22.6842 2.70788 22.9958C2.99775 23.3074 3.36444 23.5372 3.7712 23.6624L4.01872 24.75H3.99809V27.5H25.9998V24.75H7.6875C7.70555 24.6229 7.7023 24.4937 7.67788 24.3678L7.40835 23.1811L21.6503 19.9416L21.9198 21.1282C21.9917 21.4431 22.1855 21.7165 22.4588 21.8885C22.7321 22.0604 23.0626 22.1169 23.3775 22.0454L24.5642 21.7745C24.7202 21.7391 24.8676 21.6733 24.9982 21.5809C25.1287 21.4885 25.2397 21.3712 25.3249 21.2359C25.4101 21.1005 25.4678 20.9497 25.4946 20.792C25.5215 20.6343 25.517 20.4729 25.4814 20.317L25.1362 18.8004C25.7495 18.2284 26.0575 17.3621 25.8582 16.4862L25.0468 12.925C24.9484 12.496 24.7348 12.1019 24.429 11.7852C24.1232 11.4686 23.7368 11.2413 23.3115 11.1279L20.4939 6.48313C20.0784 5.8007 19.4591 5.26597 18.7233 4.95438C17.9876 4.64279 17.1726 4.57007 16.3933 4.7465L5.57396 7.20775C4.79384 7.38445 4.08918 7.80233 3.55998 8.40208C3.03077 9.00183 2.7039 9.753 2.62574 10.549L2.09357 15.9555C1.75979 16.2421 1.51044 16.6142 1.37234 17.0319C1.23423 17.4495 1.2126 17.897 1.30976 18.326L2.1197 21.8872ZM6.27252 20.9412C6.03875 20.9945 5.79679 21.0012 5.56043 20.961C5.32408 20.9207 5.09796 20.8344 4.895 20.7067C4.69204 20.5791 4.5162 20.4128 4.37752 20.2172C4.23885 20.0216 4.14006 19.8007 4.08679 19.5669C4.03351 19.3332 4.02681 19.0912 4.06705 18.8549C4.10729 18.6186 4.19369 18.3925 4.32132 18.1895C4.44894 17.9866 4.61529 17.8108 4.81088 17.6721C5.00646 17.5334 5.22744 17.4346 5.4612 17.3814C5.93331 17.2738 6.42882 17.3582 6.83872 17.6159C7.24862 17.8736 7.53935 18.2836 7.64694 18.7557C7.75452 19.2278 7.67016 19.7232 7.41241 20.1331C7.15465 20.543 6.74462 20.8337 6.27252 20.9412ZM21.704 17.4323C21.4662 17.4976 21.2177 17.5141 20.9733 17.4808C20.729 17.4475 20.494 17.3651 20.2824 17.2385C20.0708 17.1119 19.887 16.9438 19.7421 16.7443C19.5973 16.5448 19.4943 16.318 19.4395 16.0776C19.3847 15.8372 19.3791 15.5882 19.4231 15.3456C19.4671 15.103 19.5598 14.8718 19.6956 14.666C19.8314 14.4602 20.0075 14.284 20.2132 14.1481C20.4189 14.0122 20.6501 13.9193 20.8926 13.8751C21.3554 13.7908 21.8329 13.8883 22.2256 14.1474C22.6182 14.4064 22.8958 14.8069 23.0004 15.2655C23.105 15.7241 23.0285 16.2054 22.787 16.609C22.5455 17.0127 22.1575 17.3076 21.704 17.4323ZM6.18314 9.889L17.0038 7.42637C17.2207 7.37739 17.4474 7.3976 17.6521 7.48418C17.8569 7.57075 18.0293 7.71933 18.1452 7.909L20.3247 11.5019L19.5464 11.6793L5.7321 14.8239L4.95104 15.0012L5.3622 10.8185C5.38433 10.5971 5.4755 10.3882 5.62281 10.2214C5.77012 10.0546 5.96613 9.93834 6.18314 9.889ZM23.8065 2.75L21.8745 0L21.1869 4.125L24.6247 9.625L28.75 11L25.9998 7.50887L28.75 6.226L25.9998 4.94312L28.75 0L23.8065 2.75Z" fill="#2FC0A7"/>
        </svg>
        <span></span>
        <div>
            <h4>CRASHES</h4>
            <p>${crashes}</p>
        </div>
    </section>
    <section>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clip-path="url(#clip0_16860_3833)">
            <path d="M27.5 12.5V21.25C27.5 22.2446 27.1049 23.1984 26.4017 23.9017C25.6984 24.6049 24.7446 25 23.75 25H6.25C5.25544 25 4.30161 24.6049 3.59835 23.9017C2.89509 23.1984 2.5 22.2446 2.5 21.25V12.5H27.5ZM22.5 17.5H18.75C18.4185 17.5 18.1005 17.6317 17.8661 17.8661C17.6317 18.1005 17.5 18.4185 17.5 18.75C17.5 19.0815 17.6317 19.3995 17.8661 19.6339C18.1005 19.8683 18.4185 20 18.75 20H22.5C22.8315 20 23.1495 19.8683 23.3839 19.6339C23.6183 19.3995 23.75 19.0815 23.75 18.75C23.75 18.4185 23.6183 18.1005 23.3839 17.8661C23.1495 17.6317 22.8315 17.5 22.5 17.5ZM23.75 5C24.7446 5 25.6984 5.39509 26.4017 6.09835C27.1049 6.80161 27.5 7.75544 27.5 8.75V10H2.5V8.75C2.5 7.75544 2.89509 6.80161 3.59835 6.09835C4.30161 5.39509 5.25544 5 6.25 5H23.75Z" fill="#2FC0A7"/>
            </g>
            <defs>
            <clipPath id="clip0_16860_3833">
            <rect width="30" height="30" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <span></span>
        <div>
            <h4>CAR PRICE</h4>
            <p>$${price.toFixed(3)}</p>
        </div>
    </section>
    `
    document.querySelector('.insurance-btns').innerHTML = `
    ${destroyed ? 
    claim ? 
    `
    <p class='flexlittle claim-info'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.707 2.293C16.6143 2.19996 16.5041 2.12617 16.3828 2.07589C16.2614 2.0256 16.1313 1.99981 16 2H8C7.86866 1.99981 7.73857 2.0256 7.61724 2.07589C7.4959 2.12617 7.38571 2.19996 7.293 2.293L2.293 7.293C2.19996 7.38571 2.12617 7.4959 2.07589 7.61724C2.0256 7.73857 1.99981 7.86866 2 8V16C2 16.266 2.105 16.52 2.293 16.707L7.293 21.707C7.38571 21.8 7.4959 21.8738 7.61724 21.9241C7.73857 21.9744 7.86866 22.0002 8 22H16C16.266 22 16.52 21.895 16.707 21.707L21.707 16.707C21.8 16.6143 21.8738 16.5041 21.9241 16.3828C21.9744 16.2614 22.0002 16.1313 22 16V8C22.0002 7.86866 21.9744 7.73857 21.9241 7.61724C21.8738 7.4959 21.8 7.38571 21.707 7.293L16.707 2.293ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#898989"/>
    </svg>
    A claim has been sent and is pending
    </p>
    `
    :
    `
    <div class="flexsmall btn claim-insurance" onclick="claim()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="-3.05176e-05" width="24" height="24" rx="8" fill="white"/>
            <path d="M17.1399 8V12.2432H8.32831V9.40541L3.99988 13L8.32831 17V14.1622H18.9998V8H17.1399Z" fill="#010202"/>
        </svg>
        CLAIM
    </div>
    ` 
    :
    status === 'insured' ?
        `
        <div class="flexsmall btn cancel-insurance" onclick="cancelInsurance()">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <rect x="0.5" width="24" height="24" rx="8" fill="white"/>
                <path d="M19.57 11.0811H8.82844V8.2433L4.5 11.8379L8.82844 15.8379V13.0001H19.57V11.0811Z" fill="#010202"/>
            </svg>
            CANCEL INSURANCE
        </div>
        <div class="flexlittle lix-amount">
            <p>REFUND:&nbsp</p> 
            <svg class="lix" xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                <path d="M17.663 14.1894L21.7587 14.1894L13.8092 1.08752L11.7478 4.46783L17.663 14.1894Z" fill="#FFC93E"/>
                <path d="M4.65669 14.4837L10.5705 4.76088H10.5435L13.1401 0.499939L9.07279 0.499939L0.560959 14.4837H4.65669Z" fill="#FFC93E"/>
                <path d="M0.400192 15.1692L3.34426 18.5L19.3501 18.5L22.0522 15.1692L0.400192 15.1692Z" fill="#FFC93E"/>
                <path d="M13.9988 12.8427L11.2413 8.26385L8.45807 12.8179L13.9988 12.8427L11.2413 8.26385L8.45807 12.8179L13.9988 12.8427Z" fill="#FFC93E"/>
            </svg>
            <span class="amount">${(refund * price).toFixed(3)}</span>
        </div>
        ` 
        :
        `
        <div class="flexsmall btn get-insurance" onclick="getInsurance()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="-3.05176e-05" width="24" height="24" rx="8" fill="white"/>
                <path d="M17.1399 8V12.2432H8.32831V9.40541L3.99988 13L8.32831 17V14.1622H18.9998V8H17.1399Z" fill="#010202"/>
            </svg>
            GET INSURANCE
        </div>
        <div class="flexlittle lix-amount">
            <svg class="lix" xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                <path d="M17.663 14.1894L21.7587 14.1894L13.8092 1.08752L11.7478 4.46783L17.663 14.1894Z" fill="#FFC93E"/>
                <path d="M4.65669 14.4837L10.5705 4.76088H10.5435L13.1401 0.499939L9.07279 0.499939L0.560959 14.4837H4.65669Z" fill="#FFC93E"/>
                <path d="M0.400192 15.1692L3.34426 18.5L19.3501 18.5L22.0522 15.1692L0.400192 15.1692Z" fill="#FFC93E"/>
                <path d="M13.9988 12.8427L11.2413 8.26385L8.45807 12.8179L13.9988 12.8427L11.2413 8.26385L8.45807 12.8179L13.9988 12.8427Z" fill="#FFC93E"/>
            </svg>
            <span class="amount">${(insurancePremium * price).toFixed(3)}</span>
        </div>
        `
    }
    `
}
const pushVehicles = (data) => {
    vehiclesCont.innerHTML = "";
    document.querySelector('.total-vehicles').innerHTML = data.length;
    data.map((veh) => {
        const { imageUrl, status, id, destroyed } = veh;
        vehiclesCont.innerHTML += `
        <div class="vehicle ${destroyed ? 'destroyed' : ''} ${status} vehicle-${id} " onclick="viewInsuranceDetails(${id})">
            ${destroyed ? 
                `
                <svg class='destroyed-icon' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M1.97834 20.4281C2.06745 20.8151 2.25677 21.172 2.52731 21.4627C2.79785 21.7535 3.14011 21.9681 3.51975 22.0849L3.75076 23.1H3.73151V25.6667H24.2664V23.1H7.17496C7.19181 22.9814 7.18877 22.8608 7.16598 22.7432L6.91442 21.6357L20.2069 18.6122L20.4585 19.7197C20.5255 20.0135 20.7064 20.2687 20.9615 20.4292C21.2166 20.5897 21.525 20.6424 21.8189 20.5757L22.9265 20.3229C23.0721 20.2898 23.2098 20.2284 23.3316 20.1422C23.4534 20.0559 23.5571 19.9465 23.6366 19.8201C23.7161 19.6938 23.7699 19.553 23.7949 19.4059C23.82 19.2587 23.8158 19.1081 23.7826 18.9625L23.4604 17.547C24.0328 17.0131 24.3203 16.2046 24.1342 15.3872L23.377 12.0633C23.2851 11.6629 23.0857 11.2951 22.8003 10.9995C22.5149 10.704 22.1543 10.4919 21.7573 10.386L19.1276 6.05092C18.7398 5.41399 18.1617 4.9149 17.4751 4.62408C16.7884 4.33327 16.0277 4.2654 15.3004 4.43007L5.20232 6.72723C4.47421 6.89216 3.81653 7.28217 3.32261 7.84194C2.82868 8.40171 2.5236 9.1028 2.45065 9.84573L1.95396 14.8918C1.64243 15.1593 1.4097 15.5066 1.28081 15.8964C1.15191 16.2862 1.13172 16.7038 1.2224 17.1043L1.97834 20.4281ZM5.85431 19.5452C5.63613 19.5949 5.41029 19.6011 5.1897 19.5636C4.9691 19.526 4.75806 19.4454 4.56863 19.3263C4.37919 19.2072 4.21508 19.0519 4.08565 18.8694C3.95622 18.6869 3.86401 18.4806 3.81429 18.2625C3.76457 18.0443 3.75831 17.8185 3.79587 17.5979C3.83343 17.3773 3.91407 17.1663 4.03319 16.9769C4.1523 16.7875 4.30757 16.6234 4.49011 16.4939C4.67266 16.3645 4.8789 16.2723 5.09708 16.2226C5.53771 16.1222 6.00019 16.2009 6.38277 16.4415C6.76534 16.682 7.03668 17.0647 7.1371 17.5053C7.23751 17.9459 7.15877 18.4083 6.9182 18.7909C6.67763 19.1734 6.29494 19.4448 5.85431 19.5452ZM20.257 16.2701C20.0351 16.3311 19.8031 16.3465 19.5751 16.3154C19.347 16.2844 19.1277 16.2074 18.9302 16.0893C18.7327 15.9711 18.5612 15.8142 18.426 15.628C18.2908 15.4418 18.1947 15.2301 18.1435 15.0057C18.0923 14.7814 18.0871 14.549 18.1282 14.3225C18.1693 14.0961 18.2558 13.8804 18.3825 13.6883C18.5093 13.4962 18.6736 13.3318 18.8656 13.2049C19.0576 13.078 19.2733 12.9914 19.4998 12.9501C19.9317 12.8714 20.3773 12.9625 20.7438 13.2042C21.1103 13.446 21.3693 13.8198 21.467 14.2478C21.5646 14.6759 21.4933 15.125 21.2678 15.5018C21.0424 15.8785 20.6803 16.1537 20.257 16.2701ZM5.77089 9.22973L15.8702 6.93128C16.0726 6.88556 16.2842 6.90443 16.4753 6.98523C16.6664 7.06603 16.8273 7.2047 16.9355 7.38173L18.9697 10.7351L18.2433 10.9006L5.34992 13.8356L4.62093 14.0012L5.00468 10.0973C5.02534 9.89061 5.11042 9.69566 5.24791 9.53999C5.38541 9.38432 5.56835 9.27578 5.77089 9.22973ZM22.2194 2.56667L20.4161 0L19.7744 3.85L22.983 8.98333L26.8333 10.2667L24.2664 7.00828L26.8333 5.81093L24.2664 4.61358L26.8333 0L22.2194 2.56667Z" fill="#E86B61"/>
                </svg>
                ` : ''
            }
            <img src=${imageUrl} alt="vehicle">
            <div class="flexlittle">
                ${status === 'insured' ? 
                `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_18408_2615)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.532 1.59572C8.79508 1.48428 9.08253 1.46975 9.35333 1.55421L9.468 1.59572L14.1347 3.57708C14.3713 3.67753 14.5778 3.85205 14.7302 4.0803C14.8826 4.30855 14.9745 4.58113 14.9953 4.86627L15 4.99082V9.03881C15 10.2619 14.7083 11.4623 14.1557 12.5133C13.6032 13.5643 12.8103 14.4269 11.8607 15.01L11.6833 15.115L9.44733 16.3808C9.32422 16.4504 9.18974 16.4904 9.05231 16.4985C8.91489 16.5065 8.77747 16.4824 8.64867 16.4276L8.55267 16.3808L6.31667 15.115C5.35041 14.5679 4.53252 13.7357 3.94934 12.7061C3.36616 11.6765 3.03932 10.4877 3.00333 9.26525L3 9.03881V4.99082C3 4.70484 3.07175 4.42476 3.20689 4.18316C3.34203 3.94156 3.535 3.74839 3.76333 3.62614L3.86533 3.57708L8.532 1.59572ZM11.2887 6.45211L8.22333 9.92268L7.04467 8.5882C6.91957 8.44666 6.74994 8.36719 6.5731 8.36726C6.39625 8.36733 6.22667 8.44694 6.10167 8.58857C5.97666 8.7302 5.90647 8.92226 5.90653 9.12248C5.90659 9.32271 5.97691 9.51471 6.102 9.65624L7.70467 11.4708C7.77277 11.5479 7.85362 11.6091 7.94262 11.6509C8.03161 11.6926 8.127 11.7141 8.22333 11.7141C8.31966 11.7141 8.41505 11.6926 8.50405 11.6509C8.59304 11.6091 8.6739 11.5479 8.742 11.4708L12.2313 7.5194C12.295 7.44977 12.3458 7.36648 12.3807 7.27439C12.4157 7.1823 12.4341 7.08326 12.4348 6.98304C12.4356 6.88282 12.4187 6.78342 12.3852 6.69066C12.3517 6.5979 12.3022 6.51362 12.2396 6.44275C12.177 6.37188 12.1026 6.31584 12.0206 6.27789C11.9387 6.23993 11.8509 6.22084 11.7624 6.22171C11.6739 6.22258 11.5864 6.2434 11.5051 6.28296C11.4237 6.32252 11.3502 6.38002 11.2887 6.45211Z" fill="#2FC0A7"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_18408_2615">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                ` : 
                `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_18461_2496)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.468 1.59605L14.1347 3.57741C14.3889 3.6853 14.6079 3.87847 14.7626 4.1311C14.9172 4.38373 15 4.68379 15 4.99116V9.03917C15 10.3008 14.6898 11.5375 14.104 12.6106C13.5182 13.6838 12.68 14.5511 11.6833 15.1154L9.44733 16.3804C9.30845 16.4591 9.15529 16.5 9 16.5C8.84471 16.5 8.69155 16.4591 8.55267 16.3804L6.31667 15.1146C5.32003 14.5504 4.48185 13.6831 3.89605 12.6099C3.31025 11.5367 2.99998 10.3 3 9.03842V4.99191C2.99983 4.68442 3.0826 4.38419 3.23725 4.13141C3.39189 3.87863 3.61102 3.68534 3.86533 3.57741L8.532 1.59605C8.83375 1.46798 9.16625 1.46798 9.468 1.59605ZM9 10.5065C8.82319 10.5065 8.65362 10.586 8.5286 10.7276C8.40357 10.8691 8.33333 11.0611 8.33333 11.2613C8.33333 11.4615 8.40357 11.6535 8.5286 11.795C8.65362 11.9366 8.82319 12.0161 9 12.0161C9.17681 12.0161 9.34638 11.9366 9.4714 11.795C9.59643 11.6535 9.66667 11.4615 9.66667 11.2613C9.66667 11.0611 9.59643 10.8691 9.4714 10.7276C9.34638 10.586 9.17681 10.5065 9 10.5065ZM9 5.22288C8.83671 5.22291 8.67911 5.29078 8.55709 5.41363C8.43506 5.53649 8.3571 5.70577 8.338 5.88938L8.33333 5.97769V8.99691C8.33352 9.18929 8.39859 9.37433 8.51523 9.51423C8.63188 9.65412 8.7913 9.7383 8.96093 9.74958C9.13056 9.76085 9.29759 9.69836 9.42789 9.57489C9.55819 9.45141 9.64193 9.27626 9.662 9.08522L9.66667 8.99691V5.97769C9.66667 5.7775 9.59643 5.58551 9.4714 5.44396C9.34638 5.30241 9.17681 5.22288 9 5.22288Z" fill="#E86B61"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_18461_2496">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                `
            }
                <p>${status}</p>
            </div>
        </div>
        `
    })
}
document.querySelector('.destroyed-vehicles-tab').addEventListener('click', () => {
    document.querySelector('.destroyed-vehicles-tab svg').classList.remove('hide');
    document.querySelector('.destroyed-vehicles-tab').classList.add('icon-active');
    document.querySelector('.vehicle-name').classList.remove('hide-slide');
    document.querySelector('.notifications-content').classList.add('hide-slide');
    document.querySelector('.vehicles-total').classList.add('hide-display');
    document.querySelector('.insurance-header').classList.add('hide-header');
    document.querySelector('.current-page-info').classList.remove('hide-display');
    document.querySelector('.page').innerHTML = 'DESTROYED VEHICLES';
    document.querySelector('.notification-icon svg').classList.add('hide');
    document.querySelector('.notification-icon').classList.remove('icon-active');
    pushVehicles(destroyedVehicles);
    viewInsuranceDetails(destroyedVehicles[0].id);
})
const backToMainPage = () => {
    document.querySelector('.destroyed-vehicles-tab svg').classList.add('hide');
    document.querySelector('.destroyed-vehicles-tab').classList.remove('icon-active');
    document.querySelector('.vehicles-total').classList.remove('hide-display');
    document.querySelector('.insurance-header').classList.remove('hide-header');
    document.querySelector('.current-page-info').classList.add('hide-display');
    document.querySelector('main').classList.remove('hide')
    pushVehicles(availableVehicles);
    viewInsuranceDetails(availableVehicles[1].id);
}
const showLocation = () => {
    document.querySelector('.vehicles-total').classList.add('hide-display');
    document.querySelector('.insurance-header').classList.add('hide-header');
    document.querySelector('.current-page-info').classList.remove('hide-display');
    document.querySelector('.page').innerHTML = 'LOCATION';
    document.querySelector('main').classList.add('hide');
}
const getInsurance = () => {
    document.querySelector('.get-insurance-cont').classList.remove('hide');
    document.querySelector('.show-location').classList.add('hide');
    document.querySelector('.get-insurance-cont h3 b').innerHTML = selected[0].name.split(' ')[0];
    document.querySelector('.get-insurance-cont h3 span').innerHTML = selected[0].name.split(' ')[1];
    document.querySelector('.get-insurance-cont p span').innerHTML = (selected[0].price * insurancePremium).toFixed(3);
}
const confirmGetInsurance = () => {
    vehicles = vehicles.map((veh) => {
        if(veh.id === selected[0].id){
            return {...veh, status: 'insured', period: '12 months', insuredAmount: (insurancePremium * veh.price).toFixed(3)}
        } else {
            return {...veh}
        }
    })
    availableVehicles = vehicles.filter((veh) => veh.destroyed === false);
    pushVehicles(availableVehicles);
    viewInsuranceDetails(selected[0].id)
    closeTransaction();
}
const confirmCancelInsurance = () => {
    vehicles = vehicles.map((veh) => {
        if(veh.id === selected[0].id){
            return {...veh, status: 'uninsured', insuredAmount: 0, period: ''}
        } else {
            return {...veh}
        }
    })
    availableVehicles = vehicles.filter((veh) => veh.destroyed === false);
    pushVehicles(availableVehicles);
    viewInsuranceDetails(selected[0].id)
    closeTransaction();
}
const cancelInsurance = () => {
    document.querySelector('.cancel-insurance-cont').classList.remove('hide');
    document.querySelector('.show-location').classList.add('hide');
    document.querySelector('.cancel-insurance-cont h3 b').innerHTML = selected[0].name.split(' ')[0];
    document.querySelector('.cancel-insurance-cont h3 span').innerHTML = selected[0].name.split(' ')[1];
    document.querySelector('.cancel-insurance-cont p span').innerHTML = (selected[0].price * refund).toFixed(3);
}
const claim = () => {
    vehicles = vehicles.map((veh) => {
        if(veh.id === selected[0].id){
            return {...veh, claim: true}
        } else {
            return {...veh}
        }
    })
    document.querySelector('.notifications-content').classList.add('hide-slide');
    document.querySelector('.vehicle-name').classList.add('hide-slide');
    document.querySelector('.claim-alert').classList.remove('hide-slide');
    destroyedVehicles = vehicles.filter((veh) => veh.destroyed === true);
    pushVehicles(destroyedVehicles);
    viewInsuranceDetails(selected[0].id);
    setTimeout(() => {
        document.querySelector('.vehicle-name').classList.remove('hide-slide');
        document.querySelector('.claim-alert').classList.add('hide-slide');
        if(document.querySelector('.notification-icon').classList.contains('icon-active')){
            document.querySelector('.vehicle-name').classList.add('hide-slide');
            document.querySelector('.notifications-content').classList.remove('hide-slide');
        }
    }, 3000);
}
const closeTransaction = () => {
    document.querySelector('.get-insurance-cont').classList.add('hide');
    document.querySelector('.cancel-insurance-cont').classList.add('hide');
    document.querySelector('.show-location').classList.remove('hide');
}
const pushNotifications = () => {
    document.querySelector('.vehicle-name').classList.toggle('hide-slide');
    document.querySelector('.notifications-content').classList.toggle('hide-slide');
    document.querySelector('.destroyed-vehicles-tab svg').classList.add('hide');
    document.querySelector('.destroyed-vehicles-tab').classList.remove('icon-active');
    document.querySelector('.notification-icon svg').classList.toggle('hide');
    document.querySelector('.notification-icon').classList.toggle('icon-active');
    document.querySelector('.notifications').innerHTML = "";
    notifications.map((notification) => {
        const {status, name, refund} = notification;
        let statusMessage;
        let note;
        if(status === 'approved'){
            statusMessage = 'claim has been approved'
            note = 'claim approved'
        } else if (status === 'unapproved'){
            statusMessage  = 'claim has been unapproved'
            note = 'claim unapproved'
        } else if( status === 'destroyed'){
            statusMessage = 'was destroyed'
            note = 'vehicle destroyed'
        }
        document.querySelector('.notifications').innerHTML += `
        <div class="notification">
            <div class="header flexlittle">
            ${ status === 'destroyed' ? 
            `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <g clip-path="url(#clip0_18639_1109)">
                <path d="M1.55453 16.5506C1.62454 16.8548 1.77329 17.1351 1.98586 17.3636C2.19843 17.5921 2.46734 17.7606 2.76563 17.8524L2.94714 18.65H2.93202V20.6667H19.0666V18.65H5.63758C5.65082 18.5568 5.64844 18.4621 5.63052 18.3697L5.43287 17.4995L15.877 15.1239L16.0746 15.994C16.1273 16.2249 16.2695 16.4254 16.4699 16.5515C16.6703 16.6777 16.9126 16.719 17.1436 16.6666L18.0138 16.468C18.1282 16.442 18.2363 16.3938 18.3321 16.326C18.4278 16.2582 18.5092 16.1722 18.5717 16.073C18.6342 15.9737 18.6765 15.8631 18.6961 15.7475C18.7158 15.6318 18.7125 15.5135 18.6864 15.3991L18.4333 14.2869C18.8831 13.8675 19.1089 13.2322 18.9627 12.5899L18.3678 9.97833C18.2956 9.6637 18.1389 9.37472 17.9147 9.14249C17.6904 8.91027 17.4071 8.74361 17.0951 8.66044L15.0289 5.25429C14.7242 4.75385 14.2701 4.36171 13.7305 4.13321C13.191 3.90471 12.5933 3.85139 12.0218 3.98077L4.08765 5.78568C3.51557 5.91527 2.99882 6.22171 2.61073 6.66153C2.22265 7.10135 1.98294 7.6522 1.92562 8.23593L1.53537 12.2007C1.29059 12.4109 1.10774 12.6837 1.00646 12.99C0.905186 13.2963 0.889321 13.6244 0.960572 13.9391L1.55453 16.5506ZM4.59993 15.8569C4.4285 15.896 4.25106 15.9009 4.07773 15.8714C3.90441 15.8419 3.73859 15.7785 3.58975 15.6849C3.44091 15.5914 3.31196 15.4694 3.21027 15.326C3.10857 15.1825 3.03612 15.0205 2.99706 14.8491C2.95799 14.6777 2.95307 14.5002 2.98258 14.3269C3.01209 14.1536 3.07545 13.9878 3.16905 13.839C3.26264 13.6902 3.38463 13.5612 3.52806 13.4595C3.67149 13.3578 3.83354 13.2854 4.00496 13.2463C4.35118 13.1675 4.71455 13.2293 5.01514 13.4183C5.31574 13.6073 5.52894 13.908 5.60783 14.2542C5.68673 14.6004 5.62487 14.9637 5.43585 15.2643C5.24683 15.5648 4.94614 15.778 4.59993 15.8569ZM15.9163 13.2837C15.742 13.3316 15.5597 13.3437 15.3805 13.3193C15.2014 13.2949 15.029 13.2344 14.8738 13.1416C14.7186 13.0488 14.5839 12.9255 14.4777 12.7791C14.3714 12.6328 14.2959 12.4665 14.2557 12.2902C14.2155 12.1139 14.2114 11.9313 14.2437 11.7534C14.276 11.5755 14.344 11.406 14.4435 11.2551C14.5431 11.1041 14.6722 10.9749 14.8231 10.8753C14.974 10.7756 15.1435 10.7075 15.3214 10.6751C15.6607 10.6133 16.0109 10.6848 16.2988 10.8747C16.5868 11.0647 16.7903 11.3584 16.867 11.6947C16.9437 12.031 16.8877 12.384 16.7106 12.68C16.5335 12.976 16.2489 13.1922 15.9163 13.2837ZM4.53438 7.75193L12.4696 5.94601C12.6286 5.91009 12.7948 5.92491 12.945 5.9884C13.0951 6.05188 13.2216 6.16084 13.3065 6.29993L14.9049 8.93471L14.3341 9.06478L4.20362 11.3708L3.63084 11.5009L3.93236 8.43357C3.94859 8.27119 4.01545 8.11802 4.12347 7.99571C4.2315 7.87339 4.37524 7.78812 4.53438 7.75193ZM17.4582 2.51667L16.0414 0.5L15.5372 3.525L18.0582 7.55833L21.0834 8.56667L19.0666 6.00651L21.0834 5.06573L19.0666 4.12496L21.0834 0.5L17.4582 2.51667Z" fill="#E86B61"/>
            </g>
            <defs>
                <clipPath id="clip0_18639_1109">
                <rect width="22" height="22" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
            </svg>
            `
            :
            status === 'approved' ?
            `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path d="M17.3 14.1633L17.9768 10.2464C18.0165 10.0168 18.0056 9.78132 17.9448 9.55641C17.884 9.33149 17.7748 9.12258 17.6248 8.94427C17.4749 8.76596 17.2878 8.62257 17.0766 8.52413C16.8654 8.42568 16.6353 8.37456 16.4023 8.37433H11.4285C11.3124 8.37435 11.1977 8.34911 11.0924 8.30034C10.987 8.25158 10.8936 8.18047 10.8185 8.09195C10.7434 8.00343 10.6885 7.89963 10.6575 7.78775C10.6266 7.67586 10.6204 7.55859 10.6393 7.44407L11.2758 3.56078C11.3791 2.93027 11.3497 2.28515 11.1894 1.66666C11.1208 1.41111 10.9888 1.17703 10.8055 0.986195C10.6222 0.795358 10.3937 0.653952 10.1411 0.575118L10.0019 0.529996C9.68715 0.428897 9.34564 0.452259 9.04761 0.595278C8.72121 0.752721 8.48312 1.03977 8.3948 1.38058L7.93783 3.14125C7.79235 3.70155 7.58095 4.24262 7.30806 4.75313C6.90965 5.49907 6.29331 6.09716 5.65202 6.64917L4.27055 7.8396C4.0789 8.00521 3.92922 8.21388 3.83377 8.4485C3.73832 8.68312 3.69982 8.93702 3.72142 9.18939L4.50096 18.2069C4.53531 18.6057 4.71796 18.9771 5.01283 19.2478C5.3077 19.5185 5.69335 19.6688 6.09363 19.669H10.5558C13.8986 19.669 16.7508 17.34 17.3 14.1633Z" fill="#2FC0A7"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.68937 7.65431C0.874903 7.6462 1.0564 7.71009 1.19594 7.83264C1.33548 7.95518 1.42227 8.1269 1.43819 8.31193L2.36941 19.0987C2.38518 19.2594 2.36805 19.4215 2.31905 19.5753C2.27005 19.7291 2.19021 19.8713 2.08442 19.9932C1.97862 20.1151 1.84909 20.2141 1.70373 20.2843C1.55837 20.3544 1.40024 20.3942 1.23898 20.4012C1.07773 20.4082 0.916745 20.3823 0.765859 20.3249C0.614973 20.2676 0.477354 20.1802 0.361407 20.0679C0.24546 19.9556 0.153619 19.8209 0.0914935 19.6719C0.029368 19.5229 -0.00173821 19.3628 7.49391e-05 19.2014V8.37337C0.000153387 8.18778 0.0718908 8.00939 0.20032 7.87542C0.328749 7.74144 0.50395 7.66223 0.68937 7.65431Z" fill="#2FC0A7"/>
            </svg>
            `
            :
            `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path d="M17.3 6.70717L17.9768 10.6241C18.0165 10.8536 18.0056 11.0891 17.9448 11.314C17.884 11.5389 17.7748 11.7478 17.6248 11.9262C17.4749 12.1045 17.2878 12.2479 17.0766 12.3463C16.8654 12.4447 16.6353 12.4959 16.4023 12.4961H11.4285C11.3124 12.4961 11.1977 12.5213 11.0924 12.5701C10.987 12.6188 10.8936 12.69 10.8185 12.7785C10.7434 12.867 10.6885 12.9708 10.6575 13.0827C10.6266 13.1946 10.6204 13.3118 10.6393 13.4264L11.2758 17.3096C11.3791 17.9401 11.3497 18.5853 11.1894 19.2038C11.1208 19.4593 10.9888 19.6934 10.8055 19.8842C10.6222 20.0751 10.3937 20.2165 10.1411 20.2953L10.0019 20.3404C9.68715 20.4415 9.34564 20.4182 9.04761 20.2751C8.72121 20.1177 8.48312 19.8307 8.3948 19.4898L7.93783 17.7292C7.79235 17.1689 7.58095 16.6278 7.30806 16.1173C6.90965 15.3714 6.29331 14.7733 5.65202 14.2213L4.27055 13.0308C4.0789 12.8652 3.92922 12.6565 3.83377 12.4219C3.73832 12.1873 3.69982 11.9334 3.72142 11.681L4.50096 2.66356C4.53531 2.26476 4.71796 1.89333 5.01283 1.62263C5.3077 1.35194 5.69335 1.20165 6.09363 1.20144H10.5558C13.8986 1.20144 16.7508 3.53046 17.3 6.70717Z" fill="#E86B61"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.68937 13.2161C0.874903 13.2242 1.0564 13.1603 1.19594 13.0378C1.33548 12.9152 1.42227 12.7435 1.43819 12.5585L2.36941 1.7717C2.38518 1.61107 2.36805 1.4489 2.31905 1.29512C2.27005 1.14133 2.19021 0.999146 2.08442 0.877248C1.97862 0.75535 1.84909 0.656298 1.70373 0.586141C1.55837 0.515984 1.40024 0.476194 1.23898 0.469203C1.07773 0.462212 0.916745 0.488166 0.765859 0.545479C0.614973 0.602793 0.477354 0.690263 0.361407 0.802547C0.24546 0.914831 0.153619 1.04957 0.0914935 1.19854C0.029368 1.34751 -0.00173821 1.50758 7.49391e-05 1.66897V12.4971C0.000153387 12.6826 0.0718908 12.861 0.20032 12.995C0.328749 13.129 0.50395 13.2082 0.68937 13.2161Z" fill="#E86B61"/>
            </svg>
            `
            }
                <h4>${note}</h4>
            </div>
            <p><span>${name}</span> ${statusMessage} </p>
            ${status === 'destroyed' ?
            `
            <div class="notification-claim-btns">
                <button class='claim'>CLAIM</button>
                <button class='location'>LOCATION</button>
            </div>
            ` : ''
            }
            ${refund && status === 'approved' ? `
            <div class="flexlittle lix-amount">
                <p>REFUND:&nbsp</p> 
                <svg class="lix" xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                    <path d="M17.663 14.1894L21.7587 14.1894L13.8092 1.08752L11.7478 4.46783L17.663 14.1894Z" fill="#FFC93E"/>
                    <path d="M4.65669 14.4837L10.5705 4.76088H10.5435L13.1401 0.499939L9.07279 0.499939L0.560959 14.4837H4.65669Z" fill="#FFC93E"/>
                    <path d="M0.400192 15.1692L3.34426 18.5L19.3501 18.5L22.0522 15.1692L0.400192 15.1692Z" fill="#FFC93E"/>
                    <path d="M13.9988 12.8427L11.2413 8.26385L8.45807 12.8179L13.9988 12.8427L11.2413 8.26385L8.45807 12.8179L13.9988 12.8427Z" fill="#FFC93E"/>
                </svg>
                <span class="amount">${refund.toFixed(3)}</span>
            </div>
            ` : ''}
        </div>
        `
    })
}
pushVehicles(availableVehicles);
viewInsuranceDetails(availableVehicles[0].id);
document.addEventListener('keydown', evt => {
    if (evt.key === 'm'){
        showLocation()
    }
})
const back = () => {
    if (document.querySelector('.current-page-info').classList.contains('hide-display')) {
        document.querySelector('.display').classList.add('hide')
    } else {
        backToMainPage()
    }
}
document.addEventListener('keydown', evt => {
    if(evt.key === 'Escape'){
        back()
    }
})
const toggleDisplay = () => {
    document.querySelector('.display').classList.toggle('hide')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});