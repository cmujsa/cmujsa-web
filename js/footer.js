const footerItems = 
`
<!-- FOOTER START -->
<div class="container-fluid m-0 p-0">
    <footer class="footer sticky-bottom">
        <!-- Desktop Footer -->
        <div class="navbar justify-content-center hide-mobile">
            <ul class="nav">
                <li class="nav-item first two-box">
                    <div class="footer-address d-flex justify-content-center align-items-center">
                        <p>
                            &copy; 2022 CMU JSA<br>
                            Site Design: Catherine Wang<br>
                            Site Development: Emma Tong
                        </p>
                    </div>
                </li>
                <li class="nav-item hide-mid">
                    <div class="top-half"></div>
                </li>
                <li class="nav-item hide-mid">
                    <div class="top-half"></div>
                </li>
                <li class="nav-item two-box d-flex flex-wrap">
                    <div class="top-half footer-social d-flex justify-content-center align-items-center">
                        <a href="https://www.instagram.com/cmujsa/" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-instagram"></i><p>instagram</p>
                        </a>
                    </div>
                    <div class="top-half last footer-social d-flex justify-content-center align-items-center">
                        <a href="https://www.facebook.com/cmujsa" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-square-facebook"></i><p>facebook</p>
                        </a>
                    </div>
                    <div class="bottom-half two-box footer-social d-flex justify-content-center align-items-center">
                        <a href="mailto:agzheng+jsa@andrew.cmu.edu" target="_blank" rel="noopener noreferrer">
                            <i class="fa-regular fa-envelope"></i><p>agzheng@andrew.cmu.edu</p>
                        </a>
                    </div>
                </li>
            </ul>
        </div>

        <!-- Mobile Footer -->
        <div class="section">
            <div class="row justify-content-left align-items-center p-0 m-0 hide-desktop footer-padding">
                <div class="col-12">
                    <p>
                        &copy; 2022 CMU JSA<br>
                        Site Design: Catherine Wang<br>
                        Site Development: Emma Tong
                    </p>
                </div>
                <div class="col-auto footer-social">
                    <a href="https://www.instagram.com/cmujsa/" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-instagram"></i><p>instagram</p>
                    </a>
                </div>
                <div class="col-auto footer-social">
                    <a href="https://www.facebook.com/cmujsa" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-square-facebook"></i><p>facebook</p>
                    </a>
                </div>
                <div class="col-12 footer-social">
                    <a href="mailto:agzheng+jsa@andrew.cmu.edu" target="_blank" rel="noopener noreferrer">
                        <i class="fa-regular fa-envelope"></i><p>agzheng@andrew.cmu.edu</p>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div>
<!-- FOOTER END -->
`

const oldFooter = 
`
Carnegie Mellon University<br>
5000 Forbes Avenue<br>
Pittsburgh, PA 15213<br>
&copy; 2022 CMU JSA
`

document.body.insertAdjacentHTML("beforeend", footerItems);
