const How = () => {
    return (
        <div>
            <h1>How to Use PickleJar</h1>

            <section>
                <h2>For Poll Creators</h2>

                <h3>1. Create Your Poll</h3>
                <p>
                    Go to the home page and enter a title for your poll. This could be
                    a question like "Where should we eat?" or a topic like "Team outing ideas".
                </p>

                <h3>2. Save Your Management Link</h3>
                <p>
                    After creating the poll, you'll receive a shareable link. As the creator,
                    your browser stores a special token that lets you control the poll.
                    Only access your poll from the same browser to retain management access.
                </p>

                <h3>3. Share with Your Group</h3>
                <p>
                    Copy the poll link and share it with everyone who should participate.
                    They can submit ideas without needing to sign up or log in.
                </p>

                <h3>4. Start Voting</h3>
                <p>
                    Once enough ideas have been collected, click "Start Vote" to move
                    the poll to the voting phase. Participants can no longer submit
                    new ideas after this point.
                </p>

                <h3>5. Close the Poll</h3>
                <p>
                    When voting is complete, close the poll to reveal the final results
                    and see which idea won.
                </p>
            </section>

            <section>
                <h2>For Participants</h2>

                <h3>Submitting Ideas</h3>
                <p>
                    When you open a poll link during the collection phase, you can
                    submit as many ideas as you want. All ideas are anonymous - no one
                    will know which ideas you submitted.
                </p>

                <h3>Voting</h3>
                <p>
                    Once the poll creator starts voting, enter your name and click on
                    the idea you want to vote for. You can only vote once per poll.
                </p>

                <h3>Viewing Results</h3>
                <p>
                    After the poll closes, you can see all the results including which
                    idea won and how many votes each idea received.
                </p>
            </section>

            <section>
                <h2>Poll Phases</h2>
                <ul>
                    <li>
                        <strong>Collecting</strong> - Ideas are being gathered. Anyone with the link can submit.
                    </li>
                    <li>
                        <strong>Voting</strong> - No new ideas. Participants vote for their favorite.
                    </li>
                    <li>
                        <strong>Closed</strong> - Voting is complete. Results are displayed.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Tips</h2>
                <ul>
                    <li>Give participants enough time to submit ideas before starting the vote</li>
                    <li>Keep poll titles clear and specific for better ideas</li>
                    <li>Share the link through a channel everyone can access</li>
                    <li>Let participants know when you plan to start voting</li>
                </ul>
            </section>
        </div>
    )
}

export default How;
