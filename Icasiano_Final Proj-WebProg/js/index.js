let splashSection = document.createElement('section');
splashSection.classList.add('banner');


let bannerSection = document.querySelector('.banner');
bannerSection.appendChild(splashSection);

splashSection.innerHTML = `<header>
			<img class="logo" src="images/heil.png" />
			<div class="toggle" onClick="toggle()"><ion-icon name="person-circle-outline"></ion-icon></div>
		</header>
		<div class="content">
			<div class="contentBox">
				<h2>Hi! I'm.......</h2>
				<h1 data-text="Rex" class="title">Rex</h1>
				<p>My fullname is Rex Angelo Icasiano. If you want to know some information about me, simply click the icon above</p>
			</div>
			<div class="imgBox">
				<img src="images/Rex.png" alt="" />
			</div>
		</div>

		<ul class="sci">
			<li>
				<a class="fbProf"><ion-icon name="logo-facebook"></ion-icon>
			</li>
			<li>
				<a href="#"><ion-icon name="logo-instagram"></ion-icon>
			</li>
		</ul>

		<ul class="profile">
			<li>
				<img src="images/dev.jpeg" />
			</li>
			<li>
				<p><b>Name: </b>Rex Angelo Icasiano</p>
			</li>
			<li>
				<p><b>Codename: </b>The Hunter</p>
			</li>
			<li>
				<p><b>Birthday: </b>December 3, 2001</p>
			</li>
			<li>
				<p><b>Age: </b>23</p>
			</li>
			<li>
				<p><b>Address: </b>Mabuhay, Torrijos Marinduque</p>
			</li>
			<li>
				<p><b>Hobbies: </b>Sports, Video Games, Reading, Writing, Music, Eating</p>
			</li>
			<li>
				<p><b>Likes: </b>Anything Dark, Adobo, Bladed Weapons, Dogs, Humor</p>
			</li>
			<li>
				<p><b>Skills: </b>Programming, Driving, Photography</p>
			</li>
			<li>
				<p><b>Favorite Quote: </b>"The only reason a warrior is alive is to fight, and the only reason a warrior fights is to win" - Miyamoto Musashi</p>
			</li>
		</ul>`


function toggle(){
	const toggle = document.querySelector('.toggle');
	const banner = document.querySelector('.banner');
	toggle.classList.toggle('active');
	banner.classList.toggle('active'); 
}
