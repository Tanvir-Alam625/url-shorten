# Url Shorten

I created Url Shorten App with React, TailwindCSS, and TypeScript.
The URL Shortening System is a simple web application that allows users to shorten long URLs into shorter, more manageable links. It stores the shortened URLs in the browser's localStorage, making it easy for users to access and manage their list of shortened links without the need for any server-side storage.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
  - [Entry Page](#entry-page)
  - [Edit Page](#edit-page)
  - [List Page](#list-page)
- [Installation](#installation)

## Introduction

URL shortening is a technique used to create a shorter version of a long URL, which is particularly useful for sharing links on social media, in emails, or anywhere with character limitations. The URL Shortening System provides an intuitive and straightforward way to generate, edit, and manage these short URLs.

## Features

- Shorten any long URL into a compact link.
- Edit the long URL associated with a short link.
- Delete a short link when it is no longer needed.
- View a list of all created short links.
- Clicking on a short link opens the corresponding long URL in a new tab.

## Core Components

- Input
- Card
- Button
- Dropdown

## Usage

To use the URL Shortening System, follow the steps below:

### Entry Page

1. Access the Entry page of the application.
2. In the input field, enter the long URL that you want to shorten.
3. Click the "Shorten URL" button to generate a shortened link.
4. The shortened link will be displayed below the input field.
5. To visit the original URL, simply click on the shortened link.

### Edit Page

1. Access the Edit page of the application.
2. You will see a list of all the shortened links that you have previously created.
3. To edit a long URL associated with a short link, click the "Edit" button next to the corresponding entry.
4. Update the long URL in the input field.
5. Click the "Save" button to save the changes.

### List Page

1. Access the List page of the application.
2. You will see a list of all the shortened links that you have previously created.
3. To visit the original URL, simply click on the shortened link.
4. The long URL will open in a new browser tab.

## Installation

Since the URL Shortening System is a client-side application, you do not need to install any server or backend. Simply download the provided files and host them on any web server or open the HTML files directly in your web browser.

1. Clone or download this repository.
2. Host the files on a web server of your choice or open the HTML files locally in your browser.

**Note:** As the system uses the browser's localStorage to store the shortened URLs, please be aware that clearing the browser cache or using a different browser/device may lead to the loss of stored data.

## License

The URL Shortening System is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the URL Shortening System! If you have any questions, issues, or feedback, please don't hesitate to contact us or open an issue in the repository. Happy URL shortening!
