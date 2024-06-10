const navbarItems = 
`
<!-- Navigation Bar START -->
<nav class="navbar navbar-expand-lg sticky-top justify-content-center m-0 p-0">
    <div class="container-fluid p-0">
        <a class="navbar-brand hide-desktop" href="https://www.cmujsa.com">
            <div class="wrap">
                <div>
                    <img src="images/jsa-logo.png" class="img-fluid nav-img" alt="JSA Logo">
                </div>
                <div>
                    CMU JSA<br>日本学生会
                </div>
            </div>
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" 
                aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarToggle">
            <ul class="navbar-nav">
                <li class="nav-item first hide-mid"></li>
                <li class="nav-item first-mid hide-mobile">
                    <a class="nav-link" href="https://www.cmujsa.com">
                        <div class="wrap">
                            <div>
                                <img src="images/jsa-logo.png" class="img-fluid nav-img" alt="JSA Logo">
                            </div>
                            <div>
                                CMU JSA<br>日本学生会
                            </div>
                        </div>
                    </a>
                </li>
                <li class="nav-item hide-desktop">
                    <a class="nav-link" href="https://www.cmujsa.com">Home<br>ホーム</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.cmujsa.com/members">Members<br>会員</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link " href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Events<br>イベント
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="https://www.cmujsa.com/cultural">Cultural Events<br>文化イベント</a></li>
                        <li><a class="dropdown-item" href="https://www.cmujsa.com/matsuri">Matsuri<br>祭り</a></li>
                        <li><a class="dropdown-item" href="https://www.cmujsa.com/undoukai">Undoukai<br>運動会</a></li>
                        <li><a class="dropdown-item" href="https://www.cmujsa.com/booth">Booth<br>ブース</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.cmujsa.com/faq">FAQ<br>良くある質問 </a>
                </li>
                <li class="nav-item hide-mid"></li>
            </ul>
        </div>
    </div>
</nav>
<!-- Navigation Bar END -->
`

document.getElementById("navbar").innerHTML = navbarItems;