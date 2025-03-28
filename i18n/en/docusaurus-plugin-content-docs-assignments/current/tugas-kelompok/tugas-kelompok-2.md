---
sidebar_label: Final Group Project
---

import Countdown from "@site/src/components/Countdown"

# Final Group Project

**Develop a Mobile App using Flutter Framework**

---

## Description

You and your team are asked to develop a mobile app that integrates with the web application you have developed in the midterm project.
The app has to implement the features found in the web app and may also include additional features that enhance the user experience when using the app on mobile platform.
Additionally, the app needs to be releasable to Android platform via continuous integration (CI) and/or continuous deployment (CD) pipeline.

You are allowed to modify the backend, i.e. the web app, in order to support features in the mobile app.
In some cases, the backend needs to be updated if your mobile app requires user authentication and persistent data storage.
However, changes to the backend will not be counted into the evaluation of midterm group project.

## Learning Objectives

By undertaking this group project assignment, you and your teammates are expected to be able to:

-  Design a mobile app.
-  Develop a mobile app using Flutter framework.
-  Use widgets for implementing layout on the user interface and handling user input.
-  Apply event-driven programming by handling events and asynchronous calls.
-  Integrate a mobile app with at least one web service/web app.
-  Set up a continuous integration (CI) and continuous deployment (CD) pipeline to release the app.

## General Rules of the Project

1. The group comprises of 5 - 6 person.
2. The group shall create a single Git repository on GitHub that all group members use to collaborate.
   Share the link to your group's Git repository through a submission space on SCELE.
3. The Git repository shall provide a `README.md` that describes:
   -  Group name
   -  Mobile app description (i.e. app name, features, users).
   -  List of features/models that clearly highlighted the person who responsible for implementing each feature/module.
   -  Integration flow with the web app that previously developed in the midterm group project.
   -  A link to the binary executable of the mobile app (i.e. APK file) that has been released on a cloud platform (e.g. [GitHub Releases][], [Firebase App Distribution][], [Microsoft Visual Studio App Center][]).
4. The group shall build the mobile app to run it on Android and release it on a cloud platform.
   -  At minimum, upload and release the binary executable (APK file) as a GitHub Release on the group's GitHub project page, preferably automated using CI/CD.
   -  You can also release the binary executable to Firebase App Distribution and Microsoft AppCenter. Both platforms have additional features that can be included as part of quality assurance and release process of your mobile app. For example, you can test your app by running it on multiple mobile devices on Firebase Test Lab.
   -  Do not forget to design and create the icon/logo for your mobile app.

## Specific Rules for Each Group Member

Each group member must work on a single module, and each module must:

1.  Use widgets to provide layouts and handle user input.
    Make sure your group is using a design system consistently, i.e. Material, Cupertino, or roll your own.
2.  Handle one or more events generated by user or the app.
3.  Perform asynchronous call to a web service/web app that previously developed in the midterm group project.
4.  Handle incoming JSON response from the asynchronous call and display the result on the mobile app.

## Grading Rubric

The grading rubric can be found at the following link: [Final Group Project Rubric](https://docs.google.com/spreadsheets/d/1rMYRz1jw0JdfaiTaooLVhTBHaT6RuSQ4wUsQNRpF3CE/edit?usp=sharing)*. Open the English version of the rubric in the sheet named "Final Group Project Rubric (EN)".

**only viewable using the Google Workspace account for Universitas Indonesia*

## Project Timeline

<table>
    <tr>
        <th>Milestones and <em>Deliverables</em></th>
        <th>Due Dates and Remarks</th>
    </tr>
    <tr>
        <td>
            <b>Milestone 1 (30%)</b>
            <ul>
                <li>A Git repository on GitHub for the group project, i.e. the source code and project management for developing the mobile app</li>
                <li>A deployed backend (i.e the Web app developed during midterm project) on a deployment platform such as Heroku or Fly.io</li>
                <li>A README.md in the group project repository that describes:</li>
                <ol>
                    <li>Group name and members</li>
                    <li>Brief description of the app, including the app name, features, and types of roles/users in the app</li>
                    <li>Link to the releaseable app on GitHub Releases/Firebase App Distribution/Microsoft Visual Studio App Center</li>
                    <li>List of modules (or, features) that will be implemented</li>
                    <li>Integration flow with the <em>web service/web app</em> that previously created in the midterm group project</li>
                    <li>Instructions on how to build, run, and release the app</li>
                </ol>
            </ul>
        </td>
        <td>
            <b>Due Date:</b>
            <Countdown deadline={new Date("28 November 2022 23:55 GMT+7")} />
            <b>Submit the link to your group project's GitHub page</b>
            <br />
            <br />
            <p>
                <b>Submission Criteria:</b> The codebase for Flutter mobile app project that contains the project's skeleton code and README.md file.
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Milestone 2 (70%)</b>
            <p>
                <i>Implemented all features/modules</i>
            </p>
            <p><em>Checklists:</em></p>
            <ul>
                <li>Integrated modules from each group member</li>
                <li>Applied widgets on each feature/module developed by each group member</li>
                <li>Delivered the features according to the proposed ideas and design documents (e.g. wireframe, sketches, if any)</li>
                <li>The link to the releaseable app</li>
            </ul>
        </td>
        <td>
            <b>Due Date:</b>
            <Countdown deadline={new Date("12 December 2022 23:55 GMT+7")} />
            <p><b>Submission Criteria:</b> The mobile app can be downloaded and installed from its binary executable file (i.e. APK file).</p>
            <p><b>Presentation: Demonstrate the mobile app to the lecturer during final exam period.</b></p>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <b>Bonus</b>
            <p>TBA.</p>
        </td>
    </tr>
</table>

[GitHub Releases]: https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases
[Firebase App Distribution]: https://firebase.google.com/docs/app-distribution
[Microsoft Visual Studio App Center]: https://appcenter.ms/
