## Overview
partnerDash is a partner organization dashboard built with React. It provides an interface for managing and viewing partner organizations. The application is structured around a main PartnerList component, which displays a list of partner organizations. Each partner is represnted as a Card component, and detailed information about a partner can be viewed in a DetailCard component after hovering over the side list of partners

## Design Decisions
The application is designed with a component-based architecture, allowing for greater reusability. State management is handled locally within the PartnerList component using React's state hooks. The getPartners function is used to fetch partner data from supabase's api.

## Runnign the App

Clone the repository to your local machine.
Navigate to the partner-dash directory.
Install the project dependencies with the following command: npm install

To start the application in development mode, run the following command in the partner-dash directory: npm start

## Reflections & Learned

I used Figma for the first time to plan out the layout of the page. This tool significantly aided in visualizing my objectives and provided a framework to draw from when coding. 

However, I observed that having a layout led to some decision paralysis when starting to code. In retrospect, I would approach the project differently by starting with the most fundamental component (the card) instead of attempting to tackle everything at once.