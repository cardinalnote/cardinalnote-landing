<script lang="ts">
  export let width = "100%", height = "100%";

</script>

<svg width={ width } height={ height } viewBox="0 0 127 52.5" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="a" x="-.015" y="-.0353" width="1.03" height="1.07" color-interpolation-filters="sRGB">
      <feFlood flood-color= "#FFF" result="flood"/>
      <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
      <feGaussianBlur in="composite1" result="blur" stdDeviation="0.619"/>
      <feOffset result="offset"/>
      <feComposite in="SourceGraphic" in2="offset" result="composite2"/>
    </filter>
    <filter id="hover" x="-.015" y="-.0353" width="1.03" height="1.07" color-interpolation-filters="sRGB">
      <feFlood id="hover_flood" flood-color="hsl(0, 0%, 100%)" result="flood"/>
      <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
      <feGaussianBlur id="hover_blur" in="composite1" result="blur" stdDeviation="0.619"/>
      <feOffset result="offset"/>
      <feComposite in="SourceGraphic" in2="offset" result="composite2"/>
    </filter>
    <filter id="b" x="-.141" y="-1.05" width="1.28" height="3.09" color-interpolation-filters="sRGB">
      <feFlood result="flood"/>
      <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
      <feGaussianBlur in="composite1" result="blur" stdDeviation="5.573"/>
      <feOffset result="offset"/>
      <feComposite in="SourceGraphic" in2="offset" result="composite2"/>
    </filter>
  </defs>
  <g filter="url(#a)" class="titleArrow" stroke-width="0.5">
    <path class="west arrow" d="m23.7 38.3c0.101-0.0414 0.194-0.17 0.236-0.331 0.0292-0.115 0.0324-0.155 0.0294-0.383-0.0063-0.417 0.0082-0.359-0.673-2.9-0.0949-0.355-0.252-0.942-0.348-1.3-0.39-1.46-0.576-2.15-0.762-2.85-0.0428-0.161-0.123-0.462-0.178-0.666-0.41-1.53-0.414-1.55-0.476-1.96-0.0714-0.462-0.125-1.25-0.119-1.75 0.0073-0.648 0.105-1.59 0.229-2.19 0.102-0.5 0.177-0.742 0.59-1.87 0.0445-0.123 0.146-0.4 0.223-0.617 0.0776-0.215 0.178-0.497 0.223-0.617 0.0445-0.123 0.119-0.33 0.166-0.459 0.0462-0.129 0.141-0.393 0.213-0.59 0.182-0.504 0.232-0.642 0.276-0.769 0.0217-0.0617 0.0762-0.214 0.123-0.338 0.0445-0.123 0.146-0.4 0.223-0.617 0.0776-0.215 0.178-0.497 0.223-0.617 0.0445-0.123 0.146-0.4 0.223-0.617 0.0776-0.215 0.178-0.497 0.223-0.617 0.341-0.935 0.4-1.16 0.407-1.53 0.0046-0.268-0.0223-0.366-0.125-0.459-0.0621-0.0562-0.0662-0.0562-0.217-0.0517-0.255 0.0061-0.459 0.125-0.969 0.559-0.179 0.152-0.462 0.397-0.635 0.542-0.17 0.144-0.459 0.39-0.645 0.548-0.185 0.157-0.404 0.343-0.486 0.414-0.0845 0.07-0.241 0.203-0.348 0.296-0.108 0.0921-0.5 0.428-0.873 0.745-0.373 0.316-0.759 0.645-0.859 0.731-0.897 0.766-0.969 0.831-1.6 1.37-0.607 0.517-0.831 0.711-1.31 1.12-0.0845 0.0738-0.249 0.215-0.366 0.312-0.249 0.212-0.5 0.428-0.776 0.659-0.33 0.284-0.583 0.497-0.752 0.645-0.192 0.164-1.66 1.41-1.99 1.7-0.128 0.109-0.315 0.268-0.414 0.355-0.597 0.507-0.814 0.704-0.911 0.811-0.232 0.262-0.41 0.611-0.486 0.952-0.0352 0.16-0.0404 0.735-0.0059 0.893 0.0676 0.315 0.185 0.569 0.393 0.852 0.142 0.194 0.269 0.32 0.697 0.704 0.0483 0.0424 0.31 0.276 0.583 0.521 0.648 0.576 0.776 0.69 0.924 0.824 0.126 0.11 0.873 0.78 4.52 4.04 1.12 0.993 2.18 1.95 2.38 2.11 0.414 0.369 1.46 1.29 1.96 1.74 0.407 0.366 0.535 0.469 0.7 0.562 0.234 0.137 0.438 0.18 0.59 0.12z" />
    <path class="east arrow" d="m104 14.2c-0.101 0.0414-0.194 0.17-0.236 0.331-0.0293 0.115-0.0324 0.155-0.0293 0.383 7e-3 0.417-8e-3 0.359 0.673 2.9 0.0949 0.355 0.252 0.942 0.348 1.3 0.39 1.46 0.576 2.15 0.762 2.85 0.0431 0.161 0.123 0.462 0.178 0.666 0.41 1.53 0.414 1.55 0.476 1.96 0.0714 0.462 0.125 1.25 0.119 1.75-8e-3 0.648-0.105 1.59-0.229 2.19-0.102 0.5-0.177 0.742-0.59 1.87-0.0448 0.123-0.146 0.4-0.223 0.617-0.0776 0.215-0.178 0.497-0.223 0.617-0.0448 0.123-0.119 0.33-0.166 0.459-0.0462 0.129-0.141 0.393-0.213 0.59-0.182 0.504-0.232 0.642-0.276 0.769-0.0214 0.0617-0.0762 0.214-0.123 0.338-0.0448 0.123-0.146 0.4-0.223 0.617-0.0776 0.215-0.178 0.497-0.223 0.617-0.0448 0.123-0.146 0.4-0.223 0.617-0.0776 0.215-0.178 0.497-0.223 0.617-0.341 0.935-0.4 1.16-0.407 1.53-4e-3 0.268 0.0224 0.366 0.125 0.459 0.0621 0.0562 0.0662 0.0562 0.217 0.0517 0.255-0.0061 0.459-0.125 0.969-0.559 0.179-0.152 0.462-0.397 0.635-0.542 0.17-0.144 0.459-0.39 0.645-0.548 0.185-0.157 0.404-0.343 0.486-0.414 0.0845-0.07 0.241-0.203 0.348-0.296 0.108-0.0921 0.5-0.428 0.873-0.745 0.373-0.316 0.759-0.645 0.859-0.731 0.897-0.766 0.969-0.831 1.6-1.37 0.607-0.517 0.831-0.711 1.31-1.12 0.0845-0.0738 0.249-0.215 0.366-0.312 0.249-0.212 0.5-0.428 0.776-0.659 0.33-0.284 0.583-0.497 0.752-0.645 0.192-0.164 1.66-1.41 1.99-1.7 0.128-0.109 0.315-0.268 0.414-0.355 0.597-0.507 0.814-0.704 0.911-0.811 0.232-0.262 0.41-0.611 0.486-0.952 0.0352-0.16 0.0404-0.735 6e-3 -0.893-0.0676-0.315-0.185-0.569-0.393-0.852-0.142-0.194-0.269-0.32-0.697-0.704-0.0482-0.0424-0.31-0.276-0.583-0.521-0.648-0.576-0.776-0.69-0.924-0.824-0.126-0.11-0.873-0.78-4.52-4.04-1.12-0.993-2.18-1.95-2.38-2.11-0.414-0.369-1.46-1.29-1.96-1.74-0.407-0.366-0.535-0.469-0.7-0.562-0.234-0.137-0.438-0.18-0.59-0.12z"/>
    <g class="north arrow">
      <path class="blackHalf" d="m63.9 5.2c0.176-5.73e-4 0.348 0.0069 0.424 0.0234 0.316 0.0676 0.569 0.185 0.852 0.393 0.195 0.142 0.321 0.268 0.704 0.697 0.0428 0.0483 0.277 0.31 0.521 0.583 0.579 0.648 0.693 0.776 0.828 0.924 0.11 0.126 0.783 0.873 4.04 4.52 0.997 1.11 1.96 2.18 2.12 2.37 0.373 0.414 1.3 1.46 1.75 1.96 0.366 0.407 0.469 0.535 0.566 0.7 0.138 0.234 0.18 0.438 0.12 0.59l0.0055-9e-3c-0.0414 0.101-0.17 0.193-0.333 0.235-0.115 0.0293-0.155 0.0324-0.386 0.0293-0.421-0.0062-0.359 0.0083-2.91-0.673-0.355-0.0948-0.945-0.252-1.31-0.348-1.46-0.39-2.16-0.576-2.86-0.762-0.162-0.0428-0.462-0.122-0.669-0.178-1.54-0.407-1.55-0.414-1.97-0.476-0.397-0.061-1.03-0.109-1.52-0.118z"/>
      <path class="whiteHalf" d="m61.5 15.9c-0.5 0.102-0.742 0.177-1.88 0.59-0.124 0.0445-0.404 0.146-0.621 0.223-0.216 0.0776-0.497 0.178-0.621 0.223-0.124 0.0445-0.331 0.119-0.462 0.166-0.13 0.0459-0.397 0.141-0.593 0.213-0.507 0.182-0.645 0.232-0.773 0.276-0.0621 0.0217-0.214 0.0762-0.339 0.122-0.124 0.0445-0.404 0.146-0.621 0.223-0.216 0.0776-0.497 0.178-0.621 0.223-0.124 0.0445-0.404 0.146-0.621 0.223-0.216 0.0776-0.497 0.178-0.621 0.223-0.938 0.341-1.16 0.4-1.54 0.407-0.269 0.0045-0.369-0.0224-0.462-0.125-0.0562-0.0621-0.0562-0.0662-0.0521-0.217 0.0062-0.255 0.125-0.459 0.559-0.969 0.152-0.179 0.397-0.462 0.542-0.631 0.144-0.17 0.393-0.459 0.552-0.642 0.157-0.185 0.344-0.404 0.417-0.486 0.0704-0.0845 0.204-0.241 0.297-0.348 0.0924-0.108 0.428-0.5 0.748-0.873 0.317-0.373 0.648-0.759 0.735-0.859 0.769-0.893 0.835-0.969 1.38-1.6 0.521-0.607 0.711-0.831 1.12-1.31 0.0742-0.0845 0.215-0.248 0.313-0.366 0.213-0.248 0.428-0.5 0.662-0.773 0.285-0.33 0.5-0.583 0.645-0.752 0.165-0.192 1.41-1.66 1.7-1.99 0.109-0.128 0.268-0.315 0.355-0.414 0.507-0.597 0.704-0.814 0.814-0.911 0.262-0.232 1.12-0.473 1.39-0.517 0 0-0.0093 10.5-0.06 10.5z" fill="#fff"/>
    </g>
    <g class="south arrow">
      <path class="blackHalf" d="m63.6 47.3c-0.176 5.72e-4 -0.348-0.0069-0.424-0.0235-0.316-0.0676-0.569-0.185-0.852-0.393-0.195-0.142-0.321-0.268-0.704-0.697-0.0428-0.0483-0.277-0.31-0.521-0.583-0.579-0.648-0.693-0.776-0.828-0.924-0.11-0.126-0.783-0.873-4.04-4.52-0.997-1.11-1.96-2.18-2.12-2.37-0.373-0.414-1.3-1.46-1.75-1.96-0.366-0.407-0.469-0.535-0.566-0.7-0.138-0.234-0.18-0.438-0.12-0.59l-0.0055 9e-3c0.0414-0.101 0.17-0.193 0.333-0.235 0.115-0.0293 0.155-0.0324 0.386-0.0293 0.421 0.0062 0.359-0.0083 2.91 0.673 0.355 0.0949 0.945 0.252 1.31 0.348 1.46 0.39 2.16 0.576 2.86 0.762 0.162 0.0428 0.462 0.122 0.669 0.178 1.54 0.407 1.55 0.414 1.97 0.476 0.397 0.061 1.03 0.109 1.52 0.118z"/>
      <path class="whiteHalf" d="m66 36.6c0.5-0.102 0.742-0.177 1.88-0.59 0.124-0.0445 0.404-0.146 0.621-0.223 0.216-0.0776 0.497-0.178 0.621-0.223 0.124-0.0445 0.331-0.119 0.462-0.166 0.13-0.0462 0.397-0.141 0.593-0.213 0.507-0.182 0.645-0.232 0.773-0.276 0.0621-0.0217 0.214-0.0762 0.339-0.122 0.124-0.0445 0.404-0.146 0.621-0.223 0.216-0.0776 0.497-0.178 0.621-0.223 0.124-0.0445 0.404-0.146 0.621-0.223 0.216-0.0776 0.497-0.178 0.621-0.223 0.938-0.341 1.16-0.4 1.54-0.407 0.269-0.0045 0.369 0.0224 0.462 0.125 0.0562 0.0621 0.0562 0.0662 0.0521 0.217-0.0062 0.255-0.125 0.459-0.559 0.969-0.152 0.179-0.397 0.462-0.542 0.631-0.144 0.17-0.393 0.459-0.552 0.642-0.157 0.185-0.344 0.404-0.417 0.486-0.0704 0.0845-0.204 0.241-0.297 0.348-0.0924 0.108-0.428 0.5-0.748 0.873-0.317 0.373-0.648 0.759-0.735 0.859-0.769 0.893-0.835 0.969-1.38 1.6-0.521 0.607-0.711 0.831-1.12 1.31-0.0742 0.0845-0.215 0.248-0.313 0.366-0.213 0.248-0.428 0.5-0.662 0.773-0.285 0.33-0.5 0.583-0.645 0.752-0.165 0.192-1.41 1.66-1.7 1.99-0.109 0.128-0.268 0.315-0.355 0.414-0.507 0.597-0.704 0.814-0.814 0.911-0.262 0.232-1.12 0.473-1.39 0.517 0 0 0.0093-10.5 0.06-10.5z" fill="#fff"/>
    </g>
  </g>
  <path class="titleText" d="m43.5 32.4c-1.16-0.0819-2.61-1.04-3.01-2.06-1.5-1.51-0.934-5.32 1.31-5.89 1.1 0.272 3.6 1.57 2.22-0.626 0.209-1.31 0.492-5.77 1.47-3.12-0.108 2.51 0.611 5.18 0.114 7.77 0.912 2-0.0721 4.03-1.58 3.02-0.202 0.216 0.19 1.62-0.515 0.902zm0.869-1.4c-0.584-0.449-0.818 0.32 0 0zm-0.644-0.257c0.982-1.44 0.949-4.76-1.22-4.9-2.65-0.572-1.48 3.28-0.527 4.09 0.322 0.827 0.537 0.831 1.75 0.815zm1.48-0.522c-0.137-0.365-0.276 0.423 0 0zm62.1 1.72c-2.46-0.292-4.44-4.28-2.4-6.4 1.27-3.77 7.98-0.84 4.68 2.13-1.87 1.85-5.63-0.454-3.09 2.88 1.74 0.512 5.29-3.6 4.61-0.195-1.1 0.755-2.55 1.36-3.8 1.58zm-0.0924-4.69c2.54-0.394 1.39-4.24-0.874-1.67-1.21 1.5-0.948 2.54 0.874 1.67zm-73.4 4.6c-1.79-0.543-0.195-2.09-0.745-3-0.529-1.96 1.1-3.03 0.578-4.44 0.863-3.36 0.925 3.27 1.97 0.625 1.44-2.02 4.37-0.388 2.1 1.17-2.23 0.896-3.22 2.16-3.32 4.66 0.545 0.353-0.0496 1.35-0.583 0.983zm0.153-1.48c-0.0635-0.22-0.133 0.214 0 0zm17.5 1.53c-1.15-1.21-0.359-3.51-0.657-5.24-0.197-1.79 0.257-2.69 1.45-2.43 2.22-1.74 4.05 1.02 4.7 3.04 0.389 1.59-2.65 0.395-0.498 1.25 0.805 0.262 0.855 3.42-0.851 2.99-1.04-0.566 0.44-3.52-0.507-5.24-2.02-3.79-3.91 0.956-3.05 3.2-0.012 0.881 0.476 2.45-0.584 2.42zm38.4-0.0674c-1.74-0.571-3.37-3.09-2.66-4.7-0.298-1.31 1.93-4.98 3.78-3.11 2.36-0.544 3.3 2.01 3.47 3.94-0.472 1.88-1.01 3.61-3.37 3.95l-0.501 0.0148-0.709-0.0999zm0.85-1.14c1.63-1.15 3.25-5.73-0.2-5.5-2.33 1.26-3.19 5.25 0.2 5.5zm-59.7 1.02c-0.686-1.51-1.74-4.34-1.82-1.97-1.65 2.81-5.33 1.14-5.26-1.34 0.0771-1.54 1.14-3.11 2.84-4.24 1.89-1.13 4.67 0.697 4.27 2.23 1.73 0.466-0.879 1.4 0.607 2.81 0.174 0.788 0.877 2.86-0.639 2.51zm-4.08-1.96c2.06-0.55 3.85-6.21 0.312-4.41-1.23 0.692-2.65 4.78-0.312 4.41zm38.3 1.96c-0.686-1.51-1.74-4.34-1.82-1.97-1.65 2.81-5.33 1.14-5.26-1.34 0.0771-1.54 1.14-3.11 2.84-4.24 1.89-1.13 4.67 0.697 4.27 2.23 1.73 0.466-0.879 1.4 0.607 2.81 0.174 0.788 0.877 2.86-0.639 2.51zm-4.08-1.96c2.06-0.55 3.85-6.21 0.312-4.41-1.23 0.692-2.65 4.78-0.312 4.41zm10.1 1.97c-1.8 0.537-3.29-2.09-2.48-2.33-1.08-0.468-2.81-0.561-0.784-1.82 0.0047-1.89 0.24-4.92 1.2-4.76-1.36-3.9 4.45-3.35 2.68 0.473 0.0873 2.73-4.39 5.25-1.09 7.34 1.14 0.523 2-1.73 2.01-2.23 2.28 0.36 0.246 2.34-0.597 3.31-0.291 0.112-0.65 0.182-0.933 0.0166zm-1.68-5.95c0.945-1.31 2.39-3.49 0.917-4.86-1.62 1.16-0.461 3.38-1.38 4.63 0.153 0.071 0.249 0.594 0.466 0.235zm9.12 5.91c-0.0119-3.21 0.346-6.41 0.881-9.6 0.533-1.4 1.37-3.67 1.85-0.801 0.759 1.66 0.988 3.62 1.67 5.07 1.57-0.786 0.498-5.89 2.94-6.04 0.0402 3.02-1.06 6-0.944 8.8 0.799 2.51-3.01 4.06-2.49 0.619-0.232-1.46-0.583-2.45-0.993-3.73-0.645-1.05-0.617-3.33-0.854-0.622-0.784 1.7 0.508 6.46-2.07 6.31zm4.91-4.7c0.309-0.651-0.81 0.162 0 0zm16.9 4.74c-2.41 0.0987-4.04-2.77-3.33-4.88 0.49-1.93-3.28-0.592-1.14-2.39 2.53 0.501 0.449-3.42 1.7-4.65 2.15 0.346-0.225 6.17 3.58 4.21 2.01 2.44-4.57 0.325-2.48 3.79-1.53 1.02 1.75 3.9 1.81 2.66 0.857-0.815 1.95-2.89 2.67-1.24-1.26 0.568-0.97 2.58-2.81 2.49zm-52-0.086c-1.87-0.996-0.396-3.92-1.1-5.43 0.0524-0.546 0.866-3.91 1.63-1.2 0.226 2.21 0.534 4.74-0.0334 6.62l-0.123 0.131-0.375-0.118zm-30.9-0.131c-1.51-2.2-1.62-4.96-0.929-7.46 0.349-2.18 3.92-6 5.33-3.32 1.35 1.91 0.702 3.85-1.24 1.65-2.87-0.444-4.09 4.95-2.62 7 2.09 0.961 3.42-0.558 3.75-2.6 2.42 0.451-0.281 4.57-2.15 4.78-0.602 0.0622-1.66 0.287-2.13-0.0515zm29.4-8.76c-1.69-3.1 5.22-3.04 1.8-0.591-0.487 0.404-1.15 0.991-1.8 0.591z" fill="#fff" filter="url(#b)" stroke-width=".0569"/>
  <animate xlink:href="#hover_blur" attributeName="stdDeviation"
    values="0.619;0.1;0.619" dur="3s" begin="0s" repeatCount="indefinite"/>
  <animate xlink:href="#hover_flood" attributeName="flood-color"
    values="hsl(0, 0%, 100%);hsl(0, 100%, 50%);hsl(40, 100%, 50%);hsl(80, 100%, 50%);hsl(120, 100%, 50%);hsl(160, 100%, 50%);hsl(200, 100%, 50%);hsl(240, 14%, 1%);hsl(280, 100%, 50%);hsl(320, 100%, 50%);hsl(360, 100%, 50%)"
    dur="10s" begin="0s" repeatCount="indefinite"/>
</svg>

<style>
  svg {
    position: "block";

    .titleArrow {
      pointer-events: all;

      .arrow:hover {
        stroke-width: 0.1;
        stroke: var( --theme_stroke_arrow );
        fill: var( --theme_arrow );
        filter: url("#hover");
        transition: stroke-width 2s ease-out, 2s ease-in-out, fill 2s ease-in-out;
      }
    }
  }
</style>