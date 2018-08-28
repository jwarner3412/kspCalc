const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM(`
<table class="wikitable sortable jquery-tablesorter" style="text-align: right;">
<thead><tr>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Name
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Orbits
</th>
<th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Semi-major axis
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Ecc.
</th>
<th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Inc.
</th>
<th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Orbital period
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Mass
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Surface gravity
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Radius
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Rotational period
</th>
<th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> SoI
</th>
<th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending"> Atmosphere
</th></tr></thead><tbody>
<tr>
<td> <i><b><a href="/wiki/Kerbol" title="Kerbol">Kerbol</a><br></b></i>
</td>
<td> —
</td>
<td> —
</td>
<td> —
</td>
<td> —
</td>
<td> —
</td>
<td data-sort-value="1.7565459131933E+28"> <span style="white-space:nowrap;">1.757×10<sup>28</sup></span>&nbsp;kg
</td>
<td data-sort-value="17.130712827444"> 17.131&nbsp;m/s²
<p><br>(1.746&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="261600000"> <span style="white-space:nowrap;">261 600 000</span>&nbsp;m
</td>
<td data-sort-value="432000"> <span style="white-space:nowrap;">432 000</span>&nbsp;s
<p><br><span style="white-space:nowrap;">20</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 0&nbsp;m 0&nbsp;s
</p>
</td>
<td> ∞
</td>
<td> 0.157907727430507&nbsp;atm
</td></tr>
<tr>
<td> <b><a href="/wiki/Moho" title="Moho">Moho</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="5263138.304"> <span style="white-space:nowrap;">5 263 138.30</span>&nbsp;km
</td>
<td> 0.2
</td>
<td> 7&nbsp;°
</td>
<td data-sort-value="2215754.2196843"> <span style="white-space:nowrap;">2 215 754.2</span>&nbsp;s
<p><br><span style="white-space:nowrap;">102</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 3&nbsp;h 29&nbsp;m 14.2&nbsp;s
</p>
</td>
<td data-sort-value="2.5263313993016E+21"> <span style="white-space:nowrap;">2.526×10<sup>21</sup></span>&nbsp;kg
</td>
<td data-sort-value="2.6977500584721"> 2.698&nbsp;m/s²
<p><br>(0.275&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="250000"> <span style="white-space:nowrap;">250 000</span>&nbsp;m
</td>
<td data-sort-value="1210000"> <span style="white-space:nowrap;">1 210 000</span>&nbsp;s
<p><br><span style="white-space:nowrap;">56</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 6&nbsp;m 40&nbsp;s
</p>
</td>
<td data-sort-value="9646.663023328"> <span style="white-space:nowrap;">9 646.66</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <b><a href="/wiki/Eve" title="Eve">Eve</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="9832684.544"> <span style="white-space:nowrap;">9 832 684.54</span>&nbsp;km
</td>
<td> 0.01
</td>
<td> 2.09999990463257&nbsp;°
</td>
<td data-sort-value="5657995.146483"> <span style="white-space:nowrap;">5 657 995.1</span>&nbsp;s
<p><br><span style="white-space:nowrap;">261</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 5&nbsp;h 39&nbsp;m 55.1&nbsp;s
</p>
</td>
<td data-sort-value="1.2243980038014E+23"> <span style="white-space:nowrap;">1.224×10<sup>23</sup></span>&nbsp;kg
</td>
<td data-sort-value="16.677000467777"> 16.677&nbsp;m/s²
<p><br>(1.7&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="700000"> <span style="white-space:nowrap;">700 000</span>&nbsp;m
</td>
<td data-sort-value="80500"> <span style="white-space:nowrap;">80 500</span>&nbsp;s
<p><br><span style="white-space:nowrap;">3</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 4&nbsp;h 21&nbsp;m 40&nbsp;s
</p>
</td>
<td data-sort-value="85109.364738243"> <span style="white-space:nowrap;">85 109.36</span>&nbsp;km
</td>
<td> 5&nbsp;atm
</td></tr>
<tr>
<td> <a href="/wiki/Gilly" title="Gilly">Gilly</a><br>
</td>
<td> Eve
</td>
<td data-sort-value="31500"> <span style="white-space:nowrap;">31 500.00</span>&nbsp;km
</td>
<td> 0.55
</td>
<td> 12&nbsp;°
</td>
<td data-sort-value="388587.37684793"> <span style="white-space:nowrap;">388 587.4</span>&nbsp;s
<p><br><span style="white-space:nowrap;">17</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 5&nbsp;h 56&nbsp;m 27.4&nbsp;s
</p>
</td>
<td data-sort-value="1.2420363278109E+17"> <span style="white-space:nowrap;">1.242×10<sup>17</sup></span>&nbsp;kg
</td>
<td data-sort-value="0.049049998903646"> 0.049&nbsp;m/s²
<p><br>(0.005&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="13000"> <span style="white-space:nowrap;">13 000</span>&nbsp;m
</td>
<td data-sort-value="28255"> <span style="white-space:nowrap;">28 255</span>&nbsp;s
<p><br><span style="white-space:nowrap;">1</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 1&nbsp;h 50&nbsp;m 55&nbsp;s
</p>
</td>
<td data-sort-value="126.12327170457"> <span style="white-space:nowrap;">126.12</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <b><a href="/wiki/Kerbin" title="Kerbin">Kerbin</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="13599840.256"> <span style="white-space:nowrap;">13 599 840.26</span>&nbsp;km
</td>
<td> 0
</td>
<td> 0&nbsp;°
</td>
<td data-sort-value="9203544.6175013"> <span style="white-space:nowrap;">9 203 544.6</span>&nbsp;s
<p><br><span style="white-space:nowrap;">426</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 32&nbsp;m 24.6&nbsp;s
</p>
</td>
<td data-sort-value="5.2915158343922E+22"> <span style="white-space:nowrap;">5.292×10<sup>22</sup></span>&nbsp;kg
</td>
<td data-sort-value="9.8100000000001"> 9.81&nbsp;m/s²
<p><br>(1&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="600000"> <span style="white-space:nowrap;">600 000</span>&nbsp;m
</td>
<td data-sort-value="21549.4251830898"> <span style="white-space:nowrap;">21 549</span>&nbsp;s
<p><br> 5&nbsp;h 59&nbsp;m 9.4&nbsp;s
</p>
</td>
<td data-sort-value="84159.28647963"> <span style="white-space:nowrap;">84 159.29</span>&nbsp;km
</td>
<td> 1&nbsp;atm
</td></tr>
<tr>
<td> <a href="/wiki/Mun" title="Mun">Mun</a><br>
</td>
<td> Kerbin
</td>
<td data-sort-value="12000"> <span style="white-space:nowrap;">12 000.00</span>&nbsp;km
</td>
<td> 0
</td>
<td> 0&nbsp;°
</td>
<td data-sort-value="138984.37657448"> <span style="white-space:nowrap;">138 984.4</span>&nbsp;s
<p><br><span style="white-space:nowrap;">6</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 2&nbsp;h 36&nbsp;m 24.4&nbsp;s
</p>
</td>
<td data-sort-value="9.7599066119646E+20"> <span style="white-space:nowrap;">9.760×10<sup>20</sup></span>&nbsp;kg
</td>
<td data-sort-value="1.6284599380195"> 1.628&nbsp;m/s²
<p><br>(0.166&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="200000"> <span style="white-space:nowrap;">200 000</span>&nbsp;m
</td>
<td data-sort-value="138984.376574476"> <span style="white-space:nowrap;">138 984</span>&nbsp;s
<p><br><span style="white-space:nowrap;">6</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 2&nbsp;h 36&nbsp;m 24.4&nbsp;s
</p>
</td>
<td data-sort-value="2429.5591165647"> <span style="white-space:nowrap;">2 429.56</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <a href="/wiki/Minmus" title="Minmus">Minmus</a><br>
</td>
<td> Kerbin
</td>
<td data-sort-value="47000"> <span style="white-space:nowrap;">47 000.00</span>&nbsp;km
</td>
<td> 0
</td>
<td> 6&nbsp;°
</td>
<td data-sort-value="1077310.5210188"> <span style="white-space:nowrap;">1 077 310.5</span>&nbsp;s
<p><br><span style="white-space:nowrap;">49</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 5&nbsp;h 15&nbsp;m 10.5&nbsp;s
</p>
</td>
<td data-sort-value="2.6457579566209E+19"> <span style="white-space:nowrap;">2.646×10<sup>19</sup></span>&nbsp;kg
</td>
<td data-sort-value="0.49050000730901"> 0.491&nbsp;m/s²
<p><br>(0.05&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="60000"> <span style="white-space:nowrap;">60 000</span>&nbsp;m
</td>
<td data-sort-value="40400"> <span style="white-space:nowrap;">40 400</span>&nbsp;s
<p><br><span style="white-space:nowrap;">1</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 5&nbsp;h 13&nbsp;m 20&nbsp;s
</p>
</td>
<td data-sort-value="2247.4283879023"> <span style="white-space:nowrap;">2 247.43</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <b><a href="/wiki/Duna" title="Duna">Duna</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="20726155.264"> <span style="white-space:nowrap;">20 726 155.26</span>&nbsp;km
</td>
<td> 0.05
</td>
<td> 0.0599999986588955&nbsp;°
</td>
<td data-sort-value="17315400.14257"> <span style="white-space:nowrap;">17 315 400.1</span>&nbsp;s
<p><br><span style="white-space:nowrap;">801</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 3&nbsp;h 50&nbsp;m 0.1&nbsp;s
</p>
</td>
<td data-sort-value="4.5154270247749E+21"> <span style="white-space:nowrap;">4.515×10<sup>21</sup></span>&nbsp;kg
</td>
<td data-sort-value="2.9430001169443"> 2.943&nbsp;m/s²
<p><br>(0.3&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="320000"> <span style="white-space:nowrap;">320 000</span>&nbsp;m
</td>
<td data-sort-value="65517.859375"> <span style="white-space:nowrap;">65 518</span>&nbsp;s
<p><br><span style="white-space:nowrap;">3</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 11&nbsp;m 57.9&nbsp;s
</p>
</td>
<td data-sort-value="47921.949369738"> <span style="white-space:nowrap;">47 921.95</span>&nbsp;km
</td>
<td> 0.0666666686745674&nbsp;atm
</td></tr>
<tr>
<td> <a href="/wiki/Ike" title="Ike">Ike</a><br>
</td>
<td> Duna
</td>
<td data-sort-value="3200"> <span style="white-space:nowrap;">3 200.00</span>&nbsp;km
</td>
<td> 0.03
</td>
<td> 0.200000002980232&nbsp;°
</td>
<td data-sort-value="65517.862134808"> <span style="white-space:nowrap;">65 517.9</span>&nbsp;s
<p><br><span style="white-space:nowrap;">3</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 11&nbsp;m 57.9&nbsp;s
</p>
</td>
<td data-sort-value="2.7821615223587E+20"> <span style="white-space:nowrap;">2.782×10<sup>20</sup></span>&nbsp;kg
</td>
<td data-sort-value="1.0987200339138"> 1.099&nbsp;m/s²
<p><br>(0.112&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="130000"> <span style="white-space:nowrap;">130 000</span>&nbsp;m
</td>
<td data-sort-value="65517.8621348081"> <span style="white-space:nowrap;">65 518</span>&nbsp;s
<p><br><span style="white-space:nowrap;">3</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 11&nbsp;m 57.9&nbsp;s
</p>
</td>
<td data-sort-value="1049.5989393116"> <span style="white-space:nowrap;">1 049.60</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <b><a href="/wiki/Dres" title="Dres">Dres</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="40839348.203"> <span style="white-space:nowrap;">40 839 348.20</span>&nbsp;km
</td>
<td> 0.15
</td>
<td> 5&nbsp;°
</td>
<td data-sort-value="47893063.138593"> <span style="white-space:nowrap;">47 893 063.1</span>&nbsp;s
<p><br><span style="white-space:nowrap;">2 217</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 1&nbsp;h 37&nbsp;m 43.1&nbsp;s
</p>
</td>
<td data-sort-value="3.2190936578525E+20"> <span style="white-space:nowrap;">3.219×10<sup>20</sup></span>&nbsp;kg
</td>
<td data-sort-value="1.12815"> 1.128&nbsp;m/s²
<p><br>(0.115&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="138000"> <span style="white-space:nowrap;">138 000</span>&nbsp;m
</td>
<td data-sort-value="34800"> <span style="white-space:nowrap;">34 800</span>&nbsp;s
<p><br><span style="white-space:nowrap;">1</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 3&nbsp;h 40&nbsp;m 0&nbsp;s
</p>
</td>
<td data-sort-value="32832.839576776"> <span style="white-space:nowrap;">32 832.84</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <b><a href="/wiki/Jool" title="Jool">Jool</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="68773560.32"> <span style="white-space:nowrap;">68 773 560.32</span>&nbsp;km
</td>
<td> 0.05
</td>
<td> 1.30400002002716&nbsp;°
</td>
<td data-sort-value="104661432.10799"> <span style="white-space:nowrap;">104 661 432.1</span>&nbsp;s
<p><br><span style="white-space:nowrap;">4 845</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 2&nbsp;h 37&nbsp;m 12.1&nbsp;s
</p>
</td>
<td data-sort-value="4.2332127305935E+24"> <span style="white-space:nowrap;">4.233×10<sup>24</sup></span>&nbsp;kg
</td>
<td data-sort-value="7.8480001169443"> 7.848&nbsp;m/s²
<p><br>(0.8&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="6000000"> <span style="white-space:nowrap;">6 000 000</span>&nbsp;m
</td>
<td data-sort-value="36000"> <span style="white-space:nowrap;">36 000</span>&nbsp;s
<p><br><span style="white-space:nowrap;">1</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 4&nbsp;h 0&nbsp;m 0&nbsp;s
</p>
</td>
<td data-sort-value="2455985.1854234"> <span style="white-space:nowrap;">2 455 985.19</span>&nbsp;km
</td>
<td> 15.0000004517777&nbsp;atm
</td></tr>
<tr>
<td> <a href="/wiki/Laythe" title="Laythe">Laythe</a><br>
</td>
<td> Jool
</td>
<td data-sort-value="27184"> <span style="white-space:nowrap;">27 184.00</span>&nbsp;km
</td>
<td> 0
</td>
<td> 0&nbsp;°
</td>
<td data-sort-value="52980.87905938"> <span style="white-space:nowrap;">52 980.9</span>&nbsp;s
<p><br><span style="white-space:nowrap;">2</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 2&nbsp;h 43&nbsp;m 0.9&nbsp;s
</p>
</td>
<td data-sort-value="2.9397310629122E+22"> <span style="white-space:nowrap;">2.940×10<sup>22</sup></span>&nbsp;kg
</td>
<td data-sort-value="7.8480001169444"> 7.848&nbsp;m/s²
<p><br>(0.8&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="500000"> <span style="white-space:nowrap;">500 000</span>&nbsp;m
</td>
<td data-sort-value="52980.8790593796"> <span style="white-space:nowrap;">52 981</span>&nbsp;s
<p><br><span style="white-space:nowrap;">2</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 2&nbsp;h 43&nbsp;m 0.9&nbsp;s
</p>
</td>
<td data-sort-value="3723.645811133"> <span style="white-space:nowrap;">3 723.65</span>&nbsp;km
</td>
<td> 0.600000018071106&nbsp;atm
</td></tr>
<tr>
<td> <a href="/wiki/Vall" title="Vall">Vall</a><br>
</td>
<td> Jool
</td>
<td data-sort-value="43152"> <span style="white-space:nowrap;">43 152.00</span>&nbsp;km
</td>
<td> 0
</td>
<td> 0&nbsp;°
</td>
<td data-sort-value="105962.08889392"> <span style="white-space:nowrap;">105 962.1</span>&nbsp;s
<p><br><span style="white-space:nowrap;">4</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 5&nbsp;h 26&nbsp;m 2.1&nbsp;s
</p>
</td>
<td data-sort-value="3.1087655448204E+21"> <span style="white-space:nowrap;">3.109×10<sup>21</sup></span>&nbsp;kg
</td>
<td data-sort-value="2.3053499941528"> 2.305&nbsp;m/s²
<p><br>(0.235&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="300000"> <span style="white-space:nowrap;">300 000</span>&nbsp;m
</td>
<td data-sort-value="105962.088893924"> <span style="white-space:nowrap;">105 962</span>&nbsp;s
<p><br><span style="white-space:nowrap;">4</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 5&nbsp;h 26&nbsp;m 2.1&nbsp;s
</p>
</td>
<td data-sort-value="2406.401444794"> <span style="white-space:nowrap;">2 406.40</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <a href="/wiki/Tylo" title="Tylo">Tylo</a><br>
</td>
<td> Jool
</td>
<td data-sort-value="68500"> <span style="white-space:nowrap;">68 500.00</span>&nbsp;km
</td>
<td> 0
</td>
<td> 0.025000000372529&nbsp;°
</td>
<td data-sort-value="211926.35802123"> <span style="white-space:nowrap;">211 926.4</span>&nbsp;s
<p><br><span style="white-space:nowrap;">9</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 4&nbsp;h 52&nbsp;m 6.4&nbsp;s
</p>
</td>
<td data-sort-value="4.2332127305935E+22"> <span style="white-space:nowrap;">4.233×10<sup>22</sup></span>&nbsp;kg
</td>
<td data-sort-value="7.8480001169443"> 7.848&nbsp;m/s²
<p><br>(0.8&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="600000"> <span style="white-space:nowrap;">600 000</span>&nbsp;m
</td>
<td data-sort-value="211926.35802123"> <span style="white-space:nowrap;">211 926</span>&nbsp;s
<p><br><span style="white-space:nowrap;">9</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 4&nbsp;h 52&nbsp;m 6.4&nbsp;s
</p>
</td>
<td data-sort-value="10856.518368359"> <span style="white-space:nowrap;">10 856.52</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <a href="/wiki/Bop" title="Bop">Bop</a><br>
</td>
<td> Jool
</td>
<td data-sort-value="128500"> <span style="white-space:nowrap;">128 500.00</span>&nbsp;km
</td>
<td> 0.23
</td>
<td> 15&nbsp;°
</td>
<td data-sort-value="544507.42851665"> <span style="white-space:nowrap;">544 507.4</span>&nbsp;s
<p><br><span style="white-space:nowrap;">25</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 1&nbsp;h 15&nbsp;m 7.4&nbsp;s
</p>
</td>
<td data-sort-value="3.7261089834328E+19"> <span style="white-space:nowrap;">3.726×10<sup>19</sup></span>&nbsp;kg
</td>
<td data-sort-value="0.58859998684377"> 0.589&nbsp;m/s²
<p><br>(0.06&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="65000"> <span style="white-space:nowrap;">65 000</span>&nbsp;m
</td>
<td data-sort-value="544507.428516654"> <span style="white-space:nowrap;">544 507</span>&nbsp;s
<p><br><span style="white-space:nowrap;">25</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 1&nbsp;h 15&nbsp;m 7.4&nbsp;s
</p>
</td>
<td data-sort-value="1221.0608628425"> <span style="white-space:nowrap;">1 221.06</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <a href="/wiki/Pol" title="Pol">Pol</a><br>
</td>
<td> Jool
</td>
<td data-sort-value="179890"> <span style="white-space:nowrap;">179 890.00</span>&nbsp;km
</td>
<td> 0.17
</td>
<td> 4.25&nbsp;°
</td>
<td data-sort-value="901902.62353117"> <span style="white-space:nowrap;">901 902.6</span>&nbsp;s
<p><br><span style="white-space:nowrap;">41</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 4&nbsp;h 31&nbsp;m 42.6&nbsp;s
</p>
</td>
<td data-sort-value="1.0813506580682E+19"> <span style="white-space:nowrap;">1.081×10<sup>19</sup></span>&nbsp;kg
</td>
<td data-sort-value="0.37277999999999"> 0.373&nbsp;m/s²
<p><br>(0.038&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="44000"> <span style="white-space:nowrap;">44 000</span>&nbsp;m
</td>
<td data-sort-value="901902.623531173"> <span style="white-space:nowrap;">901 903</span>&nbsp;s
<p><br><span style="white-space:nowrap;">41</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 4&nbsp;h 31&nbsp;m 42.6&nbsp;s
</p>
</td>
<td data-sort-value="1042.1388923018"> <span style="white-space:nowrap;">1 042.14</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr>
<tr>
<td> <b><a href="/wiki/Eeloo" title="Eeloo">Eeloo</a><br></b>
</td>
<td> Kerbol
</td>
<td data-sort-value="90118820"> <span style="white-space:nowrap;">90 118 820.00</span>&nbsp;km
</td>
<td> 0.26
</td>
<td> 6.15&nbsp;°
</td>
<td data-sort-value="156992048.39736"> <span style="white-space:nowrap;">156 992 048.4</span>&nbsp;s
<p><br><span style="white-space:nowrap;">7 268</span>&nbsp;<abbr title="Kerbin days (= 6 h)">d</abbr> 0&nbsp;h 54&nbsp;m 8.4&nbsp;s
</p>
</td>
<td data-sort-value="1.1149224241701E+21"> <span style="white-space:nowrap;">1.115×10<sup>21</sup></span>&nbsp;kg
</td>
<td data-sort-value="1.6873200573028"> 1.687&nbsp;m/s²
<p><br>(0.172&nbsp;<i>g</i>)
</p>
</td>
<td data-sort-value="210000"> <span style="white-space:nowrap;">210 000</span>&nbsp;m
</td>
<td data-sort-value="19460"> <span style="white-space:nowrap;">19 460</span>&nbsp;s
<p><br> 5&nbsp;h 24&nbsp;m 20&nbsp;s
</p>
</td>
<td data-sort-value="119082.94164781"> <span style="white-space:nowrap;">119 082.94</span>&nbsp;km
</td>
<td data-sort-value="0"> ×&nbsp;No
</td></tr></tbody><tfoot></tfoot></table>`)

let headers = dom.window.document.querySelectorAll('table th')
let data = dom.window.document.querySelectorAll('tbody tr')


const buildCsv = (h, d, cb) => {
  let csvList = []
  h.forEach(head => csvList.push(head.innerHTML.trim()))
  cb(csvList, d)
}

const sortData = function(csv, data) {
  data.forEach(d => d.querySelectorAll('td').forEach(da => {
    let localData = da.getAttribute('data-sort-value')
    if (localData) {
      csv.push(localData)
    } else {csv.push(da.innerHTML.trim())}
  }))
  return csv
}

const y = new Promise((resolve, reject) => {
  const x = buildCsv(headers, data, (a, b) => {
    resolve(sortData(a,b))
  })
}).then((response) => console.log(response))
  .catch((err) => console.log(err))
// console.log(y)