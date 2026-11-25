<script setup>

</script>

<template>
    <main class="container py-5">
        <section class="mb-5">
            <p class="text-primary fw-semibold text-uppercase mb-2">About our project</p>
            <h1 class="display-5 fw-bold mb-3">A smarter warehouse, built together</h1>
            <p class="lead text-secondary mb-0">
                We’re a five-person team building a working model of an automated high-bay warehouse using a
                Fischertechnik system. Our project brings the website, warehouse controls, and physical model together
                to explore how goods can be stored and moved through an automated system.
            </p>
        </section>

        <section class="mb-5" aria-labelledby="team-heading">
            <h2 id="team-heading" class="h3 fw-bold mb-3">Meet the team</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                <div class="col"><article class="card h-100 shadow-sm"><div class="card-body"><h3 class="h5 card-title">Sam</h3><p class="card-text text-secondary mb-0">Frontend developer</p></div></article></div>
                <div class="col"><article class="card h-100 shadow-sm"><div class="card-body"><h3 class="h5 card-title">Finn</h3><p class="card-text text-secondary mb-0">Backend developer</p></div></article></div>
                <div class="col"><article class="card h-100 shadow-sm"><div class="card-body"><h3 class="h5 card-title">Simone</h3><p class="card-text text-secondary mb-0">Jack of all trades</p></div></article></div>
                <div class="col"><article class="card h-100 shadow-sm"><div class="card-body"><h3 class="h5 card-title">Jasmin</h3><p class="card-text text-secondary mb-0">Arduino developer</p></div></article></div>
                <div class="col"><article class="card h-100 shadow-sm"><div class="card-body"><h3 class="h5 card-title">Yana</h3><p class="card-text text-secondary mb-0">Arduino developer</p></div></article></div>
            </div>
        </section>

        <section class="card border-0 bg-light" aria-labelledby="warehouse-heading">
            <div class="card-body p-4 p-md-5">
                <h2 id="warehouse-heading" class="h3 fw-bold">The warehouse model</h2>
                <p class="text-secondary">
                    Our model is based on Fischertechnik’s Automated High-Bay Warehouse 24V. It uses conveyor and
                    positioning mechanisms to move items, with sensors and encoder feedback supporting movement and
                    position tracking. We’re developing the control system around an Arduino Portenta Machine Control.
                </p>
                <h3 class="h5 fw-semibold mt-4">Technical references</h3>
                <ul class="mb-0">
                    <li>
                        <a href="https://fiproductmedia.azureedge.net/media/Certification%20Documents/Technical%20Datasheets/fischertechnik/TDB_536631-AUTOMATISIERTES_HOCHREGAL_24V.pdf" target="_blank" rel="noreferrer">
                            Fischertechnik Automated High-Bay Warehouse 24V datasheet
                        </a>
                    </li>
                    <li>
                        <a href="https://fiproductmedia.azureedge.net/media/Certification%20Documents/Technical%20Datasheets/fischertechnik/TDB_144643-ENCODERMOTOR24V.pdf" target="_blank" rel="noreferrer">
                            Fischertechnik 24V Encoder Motor datasheet
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
