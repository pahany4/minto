function readMore(){
								var more = document.getElementById("more");
								var read_more = document.getElementById("read_more");

								if(read_more.innerHTML === "Read more") {
									more.style.display = "inline"
									read_more.innerHTML = "back"
								}
								else{
									more.style.display = "none"
									read_more.innerHTML = "Read more"
								}
							}