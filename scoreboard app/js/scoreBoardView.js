export default class scoreBoardView {
    constructor(root, playerOneName, playerTwoName, onControlButtonClick) {
        this.root = root;
        this.root.innerHTML = 
            ` <div class="scoreBoard">
                <div class="scoreBoard_name scoreBoard_name-one">${playerOneName}</div>
                <div class="scoreBoard_name scoreBoard_name-two">${playerTwoName}</div>
            
                <div class="scoreBoard_score" data-for-player="one">0</div>
                <div class="scoreBoard_score" data-for-player="two">0</div>

                <div class="scoreBoard_controls" data-for-player="one">
                    <button class="scoreBoard_controls-btn scoreBoard_controls-btn-minus">-</button>
                    <button class="scoreBoard_controls-btn scoreBoard_controls-btn-plus">+</button>
                </div>
                <div class="scoreBoard_controls" data-for-player="two">
                    <button class="scoreBoard_controls-btn scoreBoard_controls-btn-minus">-</button>
                    <button class="scoreBoard_controls-btn scoreBoard_controls-btn-plus">+</button>
                </div>
        
            </div>`;

            this.root.querySelectorAll(".scoreBoard_controls-btn").forEach(controlButton => {
                controlButton.addEventListener("click", ()=> {
                    const direction = controlButton.textContent === "-" ? "minus" : "plus";
                    const player = controlButton.closest(".scoreBoard_controls").dataset.forPlayer;

                    onControlButtonClick(player, direction);
                });
            });
    }

    update(playerOneScore, playerTwoScore) {
        this.root.querySelector(".scoreBoard_score[data-for-player='one']").textContent = playerOneScore;
        this.root.querySelector(".scoreBoard_score[data-for-player='two']").textContent = playerTwoScore;
    }
}