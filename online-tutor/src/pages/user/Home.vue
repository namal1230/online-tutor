<template>
    <div style="background-color: #368CEB; color: white;">
        <span style="display: flex; align-items: center;justify-content: center; font-size: 30px;padding: 20px 80px;">
            🎓 Master Coding, Design & Enterprise Systems — All in One Platform
        </span>
        <p style="width: 100vw;padding: 20px 30vw;">
            Become a Full Stack Developer, Mobile App Developer, AI Engineer, Cyber Security Specialist, Enterprise
            Developer, or UI/UX Designer with structured, project-based learning.
        </p>
        <v-card class="mx-auto" max-width="400">
            <v-img color="surface-variant" height="200" src="@/assets/home-image.jpg" cover>
            </v-img>

            <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">What You’ll Gain</div>

                <v-timeline align="start" density="compact">
                    <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                        size="x-small">
                        <div class="mb-4">
                            <div>{{ message.message }}</div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
        <span style="display: flex; align-items: center;justify-content: center; font-size: 30px;padding: 20px 80px;">
            🚀 Tech Stack
        </span>

        <div
            style="display: flex; column-gap: 10px; flex-wrap: wrap; row-gap: 10px; flex-direction: row; justify-content: space-around; align-content: space-around; align-items: center; position: absolute; background-color: #368CEB; margin: auto; left: 0; right: 0; padding: 0 5vw; ">
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" height="40" style="margin: 4px;"
                    src="@/assets/programs/python.png">
                </v-img>
                <p style="text-align: center;">Python</p>
            </v-card>
            <v-card class="mx-auto" width="100" height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="margin: 2px;" height="42"
                    src="@/assets/programs/java.png">
                </v-img>
                <p style="text-align: center;">Java</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="margin: 4px;" height="40"
                    src="@/assets/programs/html.png">
                </v-img>
                <p style="text-align: center;">HTML</p>
            </v-card>
            <v-card class="mx-auto" width="90" max-height="100" color="#424242">
                <v-img color="surface-variant" width="60" style="margin: 4px 20px;" height="60"
                    src="@/assets/programs/tailwind.png">
                </v-img>
                <p style="text-align: center; font-size: 10px;">Tailwind CSS</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
            <v-card class="mx-auto" max-width="100" max-height="100" color="#424242">
                <v-img color="surface-variant" width="90" style="padding-top: 30px;" src="@/assets/programs/.nett.png">
                </v-img>
                <p style="text-align: center;">.Net</p>
            </v-card>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            messages: [
                {
                    message: `Industry-ready skills from Beginner to Advanced level`,
                    color: 'deep-purple-lighten-1',
                },
                {
                    message: 'Hands-on experience through real-world projects',
                    color: 'green',
                },
                {
                    message: 'A professional portfolio to showcase your work',
                    color: 'deep-purple-lighten-1',
                },
                {
                    message: 'Structured career guidance',
                    color: 'green',
                },
            ]
        };
    }
};
</script>
