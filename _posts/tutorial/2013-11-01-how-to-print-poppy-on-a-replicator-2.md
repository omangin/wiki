---
layout: documentation
category: tutorial
title: How to print Poppy on a <em>replicator 2</em>
author: antalakas
sidemenu:
    material: Material selection
    hardware: Hardware upgrade
    issues: Common issues
    settings: Settings
    diary: Aftermath diary
---

<div class="alert alert-info">
This is a description of how to print Poppy parts using a low cost Replicator 2 3D printer.
This document is an ongoing work and will be modified based on the outcome of the process.
</div>

<div id="material"></div>
## Material _Selection_

Printing parts for a robot requires the strongest material that your printer can use, so after experimenting a little bit with PLA one can say that is too soft for the purpose. The quest for materials different that PLA leaded to two other options:
- [Amourfous copolyester](http://robosavvy.com/store/product_info.php/products_id/4037?osCsid=9a5f193501bde9e20dcb5e2b49cbcf64)
- [PET](http://shop.turtlecreations.nl/plastic/PET1/PET_175)

Based on this description <http://en.wikipedia.org/wiki/Polyethylene_terephthalate> PET was selected.

<div id="hardware"></div>
##Replicator 2 _upgrades_

If you are an early adopter of Replicator 2, you absolutely need the extruder upgrade, available free of charge [here](http://store.makerbot.com/extruder-upgrade.html).
Also a glass made build plate always pays off but mine is currently on back order and all parts are printed on the default acrylic build plate.

<div id="issues"></div>
##Common pitfalls _and workarounds_

The extruder upgrade solved the most serious problem which was that a print could be destroyed anytime since the diameter of 1.75 mm is not guaranteed in the material used.
The problem with prints not sticking on the surface can be solved partially using blue tape, glass plate (since it is more flat and does not permit warping), or spray with Garnis Fructis hair spray with bamboo extract, or just apply a thin layer of Pritt Stick. Even after all these the model can lose contact with the surface ...

What was found to be invaluable is the new raft used with latest makerware software in combination with the latest firmware. Currently latest version of firmware is 7.5 and upgrading s strongly advised. Makerware version used is 2.4.1.

Also have in mind the helper disks : <http://www.makerbot.com/blog/2013/04/19/keep-corners-flat-with-makerwares-helper-discs/>


<div id="settings"></div>
##Replicator 2 _print settings_

Hoping to have a good balance between quality, strength and build times, the following settings were used initially:

###Outcome

The outcome is really strong glass-like plastic parts that have good print quality. The drawback in the use of raft and supports is the effort needed to clear the model after printing. This task seems to be ***not*** insignificant and requires careful handling and by all means the use of right tools and protection glasses. After experimenting for several hours with the above settings here are my lesson learnt:

- PLA is not strong enough: use PET. No need to use helper disks either.
- Do not even think to use the built-in supports feature of makerware. Use meshmixer instead to generate support structure which is easier to remove and leads to less plastic consumption, with the exemption of feet (please scroll down). Using meshmixer normally allows ***not*** to use the built-in raft.
- Use the "High" profile along with meshmixer for all small parts (abdomen, pelvis, spine, shoulder) as the built time is not too long, and also you need the extra strong part produced.
- For leg and thigh, the "High" profile can lead to more than 13h printing, if your slicer manages to create the printer file. I used meshmixer and the Standard profile which led to ~7h printing, and fairly strong part
- Feet: please save yourself some time and order them from imaterialize or elsewhere… But if you want to print them anyway, use high profile, with raft and supports, no meshmixer and be very careful while removing supports because it is really fragile

<div id="diary"></div>
## Aftermath Diary

### Sat, 23/11/2013

Over the past week I printed pelvis, spine, abdomen, left foot. Printed left leg. Started at 15:00, finished after almost 13 hours. The quality seems good, and the success means that Poppy is printable using replicator 2. Lot of supports though, dremmel work is needed…

### Mon, 25/11/2013

Started printing left thigh at 08:25. Gone to work since it's going to take loooong. Failure, not sure why, but at a z plane 1,5-2 cm from the z=0 the print was displaced and happened to the back of the model, so I understood the problem much later.

Cleaned all other parts.

Broke the pelvis while cleaning, but it was a bad print anyway… Lesson: Do not use helper disks with pelvis

Overall, cleaning supports is difficult

### Thu, 28/11/2013

Printed pelvis again, no supports this time, printed fairly good and avoided the cumbersome work to remove supports.

### Sun, 01/12/2013

Finally, something interesting. Printed right leg and removed supports in 5 mins, no dremmel, but if I use it, it will become perfect. I used the tool meshmixer 2, images attached in drive, after watching this: <http://www.youtube.com/watch?v=aFTyTV3wwsE>.

More info:

- <http://www.youtube.com/watch?v=9acRH-4f8iQ>
- <http://www.thingiverse.com/meshmixer/designs>
- <http://www.meshmixer.com/>

For sure, this is the way to go. The only problem is that the slicer does not slice the model in 0.1 mm so I printed using 0.2mm still good even though not perfect.

### Fri, 13/12/2013

Several attempts to print thigh right using meshmixer + makerware were failures, also ran out of PET. PLA fails for sure, cannot print supports. Today, we have new ***glass*** build plate and 2 PET replacements = 1Kg

Tested my 8 motors, after assigning proper IDs. 6 MX-28, 2MX-64 all in the same bus. Using

PyPot OSX = failure, Linux=OK, Windows = OK.

Also commanded the same equipment using ROS Hydro and Dynamixel package. Success, great software in general.

How to make a PyPot ROS bridge? It seems everything is in place in current package for ROS.

Controllers in Pypot should be one package, motor drivers another one. But this already exists…

### Sat, 14/12/2013

Printed thigh right, 10% infill, 2 shells, 0.20mm, meshmixer+makerware. New photos attached.

### Sun, 15/12/2013

Thigh left failed, but I think I did a bad work in meshmixer, was in a hurry. While translating the model, you need to make sure to lay it down on z=0 plane in a vertical position. Printed right foot, cleaned *ALL* available parts, took some nice photos, trying to find shoes.

### Mon, 16/12/2013

But, can I assemble it? This question is solved today, for the right leg at least, positively. I have some problems with the feet, the holes are small? Or intended to be used with smaller bolts... I ordered 3 more MX-28, I miss 2x6 motors, can assemble after that all lower part from hip and down.

### Thu, 26/12/2013

Printed left thigh, 10% infill, 2 shells, 0.20mm, meshmixer+makerware. New photos attached. Also printed a replacement for FR05-S101 using a new part designed in SW. Plastic, but strong enough I hope. Received bearings for MX28 and MX64, also 3 new MX28T. This means that I can assemble from pelvis and down.

### Sun, 29/12/2013

Printed again left leg, 10% infill, 2 shells, 0.20mm, meshmixer+makerware, because I broke the first I had printed using higher quality. Having more motors, I managed to assemble Poppy from pelvis and down, wired, functioning after assigning ids to motors.
