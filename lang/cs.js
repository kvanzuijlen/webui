/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Torrent soubory||*.torrent||Všechny soubory (*.*)||*.*||",
   "DLG_BTN_OK":"OK",
   "DLG_BTN_CANCEL":"Zrušit",
   "DLG_BTN_APPLY":"Použít",
   "DLG_BTN_YES":"Ano",
   "DLG_BTN_NO":"Ne",
   "DLG_BTN_CLOSE":"Zavřít",
   "DLG_SETTINGS_00":"Možnosti",
   "DLG_SETTINGS_1_GENERAL_01":"Jazyk",
   "DLG_SETTINGS_1_GENERAL_02":"Jazyk:",
   "DLG_SETTINGS_1_GENERAL_10":"Soukromí",
   "DLG_SETTINGS_1_GENERAL_11":"Kontrolovat aktualizace automaticky",
   "DLG_SETTINGS_1_GENERAL_12":"Aktualizovat na BETA verze",
   "DLG_SETTINGS_1_GENERAL_13":"Odeslat anonymní informace při ověření aktualizace",
   "DLG_SETTINGS_1_GENERAL_17":"Při stahování",
   "DLG_SETTINGS_1_GENERAL_18":"Přidat .!ut k nekompletním souborům",
   "DLG_SETTINGS_1_GENERAL_19":"Vymezovat místo souborům",
   "DLG_SETTINGS_1_GENERAL_20":"Zamezit standby, jsou-li aktivní torrenty",
   "DLG_SETTINGS_2_UI_01":"Možnosti zobrazení",
   "DLG_SETTINGS_2_UI_02":"Potvrzovat mazání torrentů",
   "DLG_SETTINGS_2_UI_03":"Potvrzovat mazání trackerů",
   "DLG_SETTINGS_2_UI_04":"Potvrzovat ukončení programu",
   "DLG_SETTINGS_2_UI_05":"Šedé pozadí pro sudé řádky",
   "DLG_SETTINGS_2_UI_06":"Zobrazovat rychlost v záhlaví okna",
   "DLG_SETTINGS_2_UI_07":"Rychlostní limity ve stavové liště",
   "DLG_SETTINGS_2_UI_15":"Při přidávání torrentů",
   "DLG_SETTINGS_2_UI_16":"Nespouštět stahování automaticky",
   "DLG_SETTINGS_2_UI_17":"Aktivovat okno programu",
   "DLG_SETTINGS_2_UI_18":"Zobrazit okno se seznamem souborů obsažených v torrentu",
   "DLG_SETTINGS_2_UI_19":"Akce pro dvojité kliknutí",
   "DLG_SETTINGS_2_UI_20":"Pro torrenty Seeduji:",
   "DLG_SETTINGS_2_UI_22":"Pro torrenty Stahování:",
   "DLG_SETTINGS_3_PATHS_01":"Umístění stahovaných souborů",
   "DLG_SETTINGS_3_PATHS_02":"Soubory stahovat do:",
   "DLG_SETTINGS_3_PATHS_03":"Vždy zobrazovat dialog",
   "DLG_SETTINGS_3_PATHS_06":"Kompletně stažené přesunout do:",
   "DLG_SETTINGS_3_PATHS_07":"Připojit kategorii torrentu",
   "DLG_SETTINGS_3_PATHS_10":"Přesouvat soubory jen z výchozí složky stahování",
   "DLG_SETTINGS_3_PATHS_11":"Umístění torrentů",
   "DLG_SETTINGS_3_PATHS_12":"Ukládat torrenty do:",
   "DLG_SETTINGS_3_PATHS_15":"Přesouvat dokončené torrenty do:",
   "DLG_SETTINGS_3_PATHS_18":"Automaticalky nahrávat torrenty z:",
   "DLG_SETTINGS_3_PATHS_19":"Smazat načtené torrenty",
   "DLG_SETTINGS_4_CONN_01":"Port pro naslouchání",
   "DLG_SETTINGS_4_CONN_02":"Port používaný pro příchozí spojení:",
   "DLG_SETTINGS_4_CONN_04":"Náhodný port",
   "DLG_SETTINGS_4_CONN_05":"Náhodný port při každém spuštění",
   "DLG_SETTINGS_4_CONN_06":"Zapnout UPnP mapování portu",
   "DLG_SETTINGS_4_CONN_07":"Zapnout NAT-PMP mapování portu",
   "DLG_SETTINGS_4_CONN_08":"Proxy server",
   "DLG_SETTINGS_4_CONN_09":"Typ:",
   "DLG_SETTINGS_4_CONN_11":"Proxy:",
   "DLG_SETTINGS_4_CONN_13":"Port:",
   "DLG_SETTINGS_4_CONN_15":"Ověření uživatele",
   "DLG_SETTINGS_4_CONN_16":"Jméno:",
   "DLG_SETTINGS_4_CONN_18":"Heslo:",
   "DLG_SETTINGS_4_CONN_19":"Hostname zjišťovat přes proxy",
   "DLG_SETTINGS_4_CONN_20":"Používat proxy server pro peer-to-peer spojení",
   "DLG_SETTINGS_4_CONN_21":"Povolit ve Windows Firewall",
   "DLG_SETTINGS_4_CONN_22":"Proxy soukromí",
   "DLG_SETTINGS_4_CONN_23":"Vypnout všechny lokální DNS lookup",
   "DLG_SETTINGS_4_CONN_24":"Zakázat funkce s rizikem uníku identifikačních údajů",
   "DLG_SETTINGS_4_CONN_25":"Zakázat spojení, která nejsou podporována proxy",
   "DLG_SETTINGS_5_BANDWIDTH_01":"Celkové rychlostní limity odesílání",
   "DLG_SETTINGS_5_BANDWIDTH_02":"Maximální upload (kB/s): [0: neomezeno]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"Automaticky",
   "DLG_SETTINGS_5_BANDWIDTH_05":"Limit uploadu, když není stahování (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"Celkové rychlostní limity stahování",
   "DLG_SETTINGS_5_BANDWIDTH_08":"Maximální download (kB/s): [0: neomezeno]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"Počet spojení",
   "DLG_SETTINGS_5_BANDWIDTH_11":"Maximální počet všech spojení:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"Maximální počet připojených peerů na torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"Počet odesílacích slotů na torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"Použít další slot, pokud je rychlost uploadu < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Global Rate Limit Options",
   "DLG_SETTINGS_5_BANDWIDTH_19":"Aplikovat limity na transport overhead",
   "DLG_SETTINGS_5_BANDWIDTH_20":"Aplikovat limity na uTP spojení",
   "DLG_SETTINGS_6_BITTORRENT_01":"Základní BitTorrent možnosti",
   "DLG_SETTINGS_6_BITTORRENT_02":"Povolit DHT",
   "DLG_SETTINGS_6_BITTORRENT_03":"Žádat tracker o scrape informace",
   "DLG_SETTINGS_6_BITTORRENT_04":"Zapínat DHT u nových torrentů",
   "DLG_SETTINGS_6_BITTORRENT_05":"Zapínat Peer Exchange",
   "DLG_SETTINGS_6_BITTORRENT_06":"Zapínat Hledání lokálních peerů",
   "DLG_SETTINGS_6_BITTORRENT_07":"Limity i pro lokální peery",
   "DLG_SETTINGS_6_BITTORRENT_08":"IP/Hostname odesílané trackeru:",
   "DLG_SETTINGS_6_BITTORRENT_10":"Kódování přenosu",
   "DLG_SETTINGS_6_BITTORRENT_11":"Odchozí:",
   "DLG_SETTINGS_6_BITTORRENT_13":"Povolit nekódovaná příchozí spojení",
   "DLG_SETTINGS_6_BITTORRENT_14":"Povolit řízení šířky pásma [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"Zapnout podporu UDP trackerů",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Zapnout datové limity",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Přenos dat",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"Typ limitu:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"Množství přenesených dat:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"Za období (dny):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"Statistika přenosu dat za období:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"Odesláno:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"Staženo:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"Celkem:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"Období:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"posledních %d dnů",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"Vynulovat",
   "DLG_SETTINGS_8_QUEUEING_01":"Nastavení čekání ve frontě",
   "DLG_SETTINGS_8_QUEUEING_02":"Maximální počet aktivních torrentů (seedování nebo stahování):",
   "DLG_SETTINGS_8_QUEUEING_04":"Maximální počet aktivních stahování:",
   "DLG_SETTINGS_8_QUEUEING_06":"Seeduj dokud [výchozí hodnoty]",
   "DLG_SETTINGS_8_QUEUEING_07":"Minimální ratio (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"Minimální čas seedování (minuty):",
   "DLG_SETTINGS_8_QUEUEING_11":"Seedování má vyšší prioritu než stahování",
   "DLG_SETTINGS_8_QUEUEING_12":"Limit uploadu po dosažení hodnoty Ratio nebo seed čas",
   "DLG_SETTINGS_8_QUEUEING_13":"Limit uploadování (kB/s): [0: zastavit]",
   "DLG_SETTINGS_9_SCHEDULER_01":"Povolit plánování",
   "DLG_SETTINGS_9_SCHEDULER_02":"Tabulka plánování",
   "DLG_SETTINGS_9_SCHEDULER_04":"Rychlost v režimu Omezeno",
   "DLG_SETTINGS_9_SCHEDULER_05":"Limit rychlosti upload (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"Limit rychlosti download (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"Vyp. DHT v režimu Zastaveno",
   "DLG_SETTINGS_9_WEBUI_01":"Zapnout Web UI",
   "DLG_SETTINGS_9_WEBUI_02":"Ověření uživatele",
   "DLG_SETTINGS_9_WEBUI_03":"Jméno:",
   "DLG_SETTINGS_9_WEBUI_05":"Heslo:",
   "DLG_SETTINGS_9_WEBUI_07":"Povolit Guest účet s uživatelským jménem:",
   "DLG_SETTINGS_9_WEBUI_09":"Připojení",
   "DLG_SETTINGS_9_WEBUI_10":"Alternativní naslouchací port (výchozí port viz. Připojení):",
   "DLG_SETTINGS_9_WEBUI_12":"Přístup k Web UI je možný pouze z těchto IP adres (více IP oddělujte čárkou ,):",
   "DLG_SETTINGS_A_ADVANCED_01":"Rozšířené nastavení [VAROVÁNÍ: Úpravy na vlastní riziko!]",
   "DLG_SETTINGS_A_ADVANCED_02":"Hodnota:",
   "DLG_SETTINGS_A_ADVANCED_03":"True",
   "DLG_SETTINGS_A_ADVANCED_04":"False",
   "DLG_SETTINGS_A_ADVANCED_05":"Nastav",
   "DLG_SETTINGS_B_ADV_UI_01":"Hodnoty rychlostních omezení [oddělujte čárkou, dvě čárky udělají linku]",
   "DLG_SETTINGS_B_ADV_UI_02":"Ignoruj automatický seznam rychlostí",
   "DLG_SETTINGS_B_ADV_UI_03":"Rychlosti Upload:",
   "DLG_SETTINGS_B_ADV_UI_05":"Rychlosti Download:",
   "DLG_SETTINGS_B_ADV_UI_07":"Trvalé kategorie [Zadané kategorie oddělujte bez mezer znakem | (Alt+124)]",
   "DLG_SETTINGS_B_ADV_UI_08":"Vyhledávací pluginy [Formát: název|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"Základní nastavení cache",
   "DLG_SETTINGS_C_ADV_CACHE_02":"Disková cash uchovává často používaná data v paměti pro snížení počtu čtení a zápisů na hard disk. µTorrent spravuje cache automaticky, ale vy můžete měnit jeho chování tím, že modifikuje tato nastavení.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"Nepoužívat automatickou velikost cache. Cache nastavit na (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"Omezit používání paměti, pokud cache není potřeba",
   "DLG_SETTINGS_C_ADV_CACHE_06":"Rozšířené nastavení cache",
   "DLG_SETTINGS_C_ADV_CACHE_07":"Zapnout cache pro zápisy na disk",
   "DLG_SETTINGS_C_ADV_CACHE_08":"Zapisovat nedotčené bloky každé 2 minuty",
   "DLG_SETTINGS_C_ADV_CACHE_09":"Zapisovat dokončené části okamžitě",
   "DLG_SETTINGS_C_ADV_CACHE_10":"Zapnout cache pro čtení z disku",
   "DLG_SETTINGS_C_ADV_CACHE_11":"Vypnout cache čtení, je-li rychlost uploadu nízká",
   "DLG_SETTINGS_C_ADV_CACHE_12":"Vymazat staré bloky z cache",
   "DLG_SETTINGS_C_ADV_CACHE_13":"Zvětšit automatickou velikost cache při potížích",
   "DLG_SETTINGS_C_ADV_CACHE_14":"Vypnout Windows cache pro zápis na disk",
   "DLG_SETTINGS_C_ADV_CACHE_15":"Vypnout Windows cache pro čtení z disku",
   "DLG_SETTINGS_C_ADV_RUN_01":"Spustit program",
   "DLG_SETTINGS_C_ADV_RUN_02":"Po dokončení stahování torrentu spustit tento program:",
   "DLG_SETTINGS_C_ADV_RUN_04":"Po změně stavu torrentu spustit tento program:",
   "DLG_SETTINGS_C_ADV_RUN_06":"Můžete použít tyto příkazy:\r\n%F - Jméno stahovaného souboru\r\n%D - Složka pro uložení souborů\r\n%N - Titulek torrentu\r\n%S - Stav torrentu\r\n%L - Kategorie\r\n%T - Tracker\r\n%M - Řetězec stavové zprávy (shodné se sloupcem Stav)\r\n%I - Hex encoded info-hash\r\n\r\nStav je kombinací:\r\nspuštěno = 1, kontrolováno = 2, spuštěno po zkontrolování = 4,\r\nzkontrolováno = 8, chyba = 16, pauza = 32, auto = 64, zavedeno = 128",
   "DLG_TORRENTPROP_00":"Vlastnosti torrentu",
   "DLG_TORRENTPROP_1_GEN_01":"Trackery (oddělujte prázdnou řádkou)",
   "DLG_TORRENTPROP_1_GEN_03":"Rychlostní limity",
   "DLG_TORRENTPROP_1_GEN_04":"Maximální rychlost uploadu (kB/s): [0: výchozí]",
   "DLG_TORRENTPROP_1_GEN_06":"Maximální rychlost dowloadu (kB/s): [0: výchozí]",
   "DLG_TORRENTPROP_1_GEN_08":"Počet odesílacích slotů: [0: výchozí]",
   "DLG_TORRENTPROP_1_GEN_10":"Seedovat dokud",
   "DLG_TORRENTPROP_1_GEN_11":"Ignoruj výchozí nastavení",
   "DLG_TORRENTPROP_1_GEN_12":"Minimální ratio (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Minimální čas seedování (minuty):",
   "DLG_TORRENTPROP_1_GEN_16":"Další nastavení",
   "DLG_TORRENTPROP_1_GEN_17":"Počáteční Seed",
   "DLG_TORRENTPROP_1_GEN_18":"Povolit DHT",
   "DLG_TORRENTPROP_1_GEN_19":"Peer Exchange",
   "DLG_ADDEDITRSSFEED_03":"RSS kanál",
   "DLG_ADDEDITRSSFEED_04":"URL kanálu:",
   "DLG_ADDEDITRSSFEED_05":"Vlastní alias:",
   "DLG_ADDEDITRSSFEED_06":"Stahování",
   "DLG_ADDEDITRSSFEED_07":"Nestahovat automaticky žádné položky",
   "DLG_ADDEDITRSSFEED_08":"Automaticky stahovat položky z RSS kanálu",
   "DLG_ADDEDITRSSFEED_09":"Použít chytrý filtr epizod",
   "DLG_RSSDOWNLOADER_02":"Kanály||Oblíbené||Historie||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"Nastavení filtru",
   "DLG_RSSDOWNLOADER_05":"Název:",
   "DLG_RSSDOWNLOADER_06":"Stahuj:",
   "DLG_RSSDOWNLOADER_07":"Mimo:",
   "DLG_RSSDOWNLOADER_08":"Ulož do:",
   "DLG_RSSDOWNLOADER_09":"Kanál:",
   "DLG_RSSDOWNLOADER_10":"Kvalita:",
   "DLG_RSSDOWNLOADER_11":"Číslo epizody: [např. 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"Filtr odpovídá originálnímu jménu místo dekódovaného",
   "DLG_RSSDOWNLOADER_13":"Nespouštět stahování automaticky",
   "DLG_RSSDOWNLOADER_14":"Filtrování epizod",
   "DLG_RSSDOWNLOADER_15":"Dát stahování nejvyšší prioritu",
   "DLG_RSSDOWNLOADER_16":"Minimální interval:",
   "DLG_RSSDOWNLOADER_17":"Zařadit do kategorie:",
   "DLG_RSSDOWNLOADER_18":"Přidat RSS kanál...",
   "DLG_RSSDOWNLOADER_19":"Upravit kanál",
   "DLG_RSSDOWNLOADER_20":"Vypnout kanál",
   "DLG_RSSDOWNLOADER_21":"Zapnout kanál",
   "DLG_RSSDOWNLOADER_22":"Aktualizovat kanál",
   "DLG_RSSDOWNLOADER_23":"Odstranit kanál",
   "DLG_RSSDOWNLOADER_24":"Stáhnout torrent",
   "DLG_RSSDOWNLOADER_25":"Otevřít URL v prohlížeči",
   "DLG_RSSDOWNLOADER_26":"Přidat k oblíbeným",
   "DLG_RSSDOWNLOADER_27":"Přidat",
   "DLG_RSSDOWNLOADER_28":"Smazat",
   "DLG_RSSDOWNLOADER_29":"Libovolná",
   "DLG_RSSDOWNLOADER_30":"(Všechny)",
   "DLG_RSSDOWNLOADER_31":"vždy||jen jednou||12 hodin||1 den||2 dny||3 dny||4 dny||1 týden||2 týdny||3 týdny||1 měsíc||",
   "DLG_RSSDOWNLOADER_32":"Přidat RSS kanál",
   "DLG_RSSDOWNLOADER_33":"Upravit RSS kanál",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"Skutečně smazat RSS kanál \"%s\"?",
   "FEED_COL_FULLNAME":"Úplný název",
   "FEED_COL_NAME":"Jméno",
   "FEED_COL_EPISODE":"Epizoda",
   "FEED_COL_FORMAT":"Formát",
   "FEED_COL_CODEC":"Kodek",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"Kanál",
   "FEED_COL_URL":"Zdrojová URL",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"Port",
   "PRS_COL_CLIENT":"Klient",
   "PRS_COL_FLAGS":"Směr",
   "PRS_COL_PCNT":"Procent",
   "PRS_COL_RELEVANCE":"Důležitost",
   "PRS_COL_DOWNSPEED":"Rychlost Down",
   "PRS_COL_UPSPEED":"Rychlost Up",
   "PRS_COL_REQS":"Požadavky",
   "PRS_COL_WAITED":"Čekání",
   "PRS_COL_UPLOADED":"Odesláno",
   "PRS_COL_DOWNLOADED":"Staženo",
   "PRS_COL_HASHERR":"Hash chyb",
   "PRS_COL_PEERDL":"Peer Down",
   "PRS_COL_MAXUP":"MaxUp",
   "PRS_COL_MAXDOWN":"MaxDown",
   "PRS_COL_QUEUED":"Ve frontě",
   "PRS_COL_INACTIVE":"Neaktivní",
   "FI_COL_DONE":"Hotovo",
   "FI_COL_FIRSTPC":"První část",
   "FI_COL_NAME":"Název",
   "FI_COL_NUMPCS":"Počet částí",
   "FI_COL_PCNT":"Procent",
   "FI_COL_PRIO":"Priorita",
   "FI_COL_SIZE":"Velikost",
   "FI_PRI0":"preskočit",
   "FI_PRI1":"nízká",
   "FI_PRI2":"normální",
   "FI_PRI3":"vysoká",
   "GN_TP_01":"Staženo:",
   "GN_TP_02":"Odesláno:",
   "GN_TP_03":"Seedů:",
   "GN_TP_04":"Zbývající čas:",
   "GN_TP_05":"Rychlost Down.:",
   "GN_TP_06":"Rychlost Up.:",
   "GN_TP_07":"Peerů:",
   "GN_TP_08":"Ratio:",
   "GN_TP_09":"Uložit jako:",
   "GN_TP_10":"Hash:",
   "GN_GENERAL":"Hlavní",
   "GN_TRANSFER":"Přenos",
   "GN_XCONN":"%d z %d připojeno (%d ve swarmu)",
   "MAIN_TITLEBAR_SPEED":"D:%s U:%s - %s",
   "MENU_COPY":"Kopírovat",
   "MENU_RESET":"Reset",
   "MENU_UNLIMITED":"Neomezeno",
   "MP_RESOLVE_IPS":"Překládat IP",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"Nestahovat",
   "MF_HIGH":"Vysoká priorita",
   "MF_LOW":"Nízká priorita",
   "MF_NORMAL":"Normální priorita",
   "ML_COPY_MAGNETURI":"Kopírovat Magnet URI",
   "ML_DELETE_DATA":"vymazat data",
   "ML_DELETE_TORRENT":"vymazat torrent",
   "ML_DELETE_DATATORRENT":"vymazat torrent + data",
   "ML_FORCE_RECHECK":"Zkontrolovat soubory",
   "ML_FORCE_START":"Vynucený Start",
   "ML_LABEL":"Kategorie",
   "ML_PAUSE":"Pauza",
   "ML_PROPERTIES":"Vlastnosti",
   "ML_QUEUEDOWN":"Přesun ve frontě dolu",
   "ML_QUEUEUP":"Přesun ve frontě nahoru",
   "ML_REMOVE":"Smazat úkol",
   "ML_REMOVE_AND":"Smazat úkol a ...",
   "ML_START":"Start",
   "ML_STOP":"Stop",
   "OV_CAT_ACTIVE":"Aktivní",
   "OV_CAT_ALL":"Všechny",
   "OV_CAT_COMPL":"Dokončené",
   "OV_CAT_DL":"Stahované",
   "OV_CAT_INACTIVE":"Neaktivní",
   "OV_CAT_NOLABEL":"Bez kategorie",
   "OV_COL_AVAIL":"||Dostup.||Dostupnost",
   "OV_COL_DATE_ADDED":"Přidáno dne",
   "OV_COL_DATE_COMPLETED":"Dokončeno dne",
   "OV_COL_DONE":"Procent",
   "OV_COL_DOWNLOADED":"Staženo",
   "OV_COL_DOWNSPD":"Rychlost Down",
   "OV_COL_ETA":"Čas",
   "OV_COL_LABEL":"Kategorie",
   "OV_COL_NAME":"Jméno",
   "OV_COL_ORDER":"#",
   "OV_COL_PEERS":"Peerů",
   "OV_COL_REMAINING":"Zbývá",
   "OV_COL_SEEDS":"Seedů",
   "OV_COL_SEEDS_PEERS":"Seeds/Peers",
   "OV_COL_SHARED":"Ratio",
   "OV_COL_SIZE":"Velikost",
   "OV_COL_SOURCE_URL":"Zdrojová URL",
   "OV_COL_STATUS":"Stav",
   "OV_COL_UPPED":"Odesláno",
   "OV_COL_UPSPD":"Rychlost Up",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"Opravdu si přejete odstranit vybrané torrenty (%d) a jimi sdílená data?",
   "OV_CONFIRM_DELETEDATA_ONE":"Opravdu si přejete odstranit vybraný torrent a jím sdílená data?",
   "OV_CONFIRM_DELETE_MULTIPLE":"Opravdu si přejete odstranit vybrané torrenty (%d) ?",
   "OV_CONFIRM_DELETE_ONE":"Opravdu si přejete odstranit vybraný torrent?",
   "OV_CONFIRM_DELETE_RSSFILTER":"Skutečně smazat RSS filtr \"%s\"?",
   "OV_FL_CHECKED":"Kontroluji %:.1d%",
   "OV_FL_DOWNLOADING":"Stahování",
   "OV_FL_ERROR":"Chyba: %s",
   "OV_FL_FINISHED":"Dokončeno",
   "OV_FL_PAUSED":"Pozastaveno",
   "OV_FL_QUEUED":"Ve frontě",
   "OV_FL_QUEUED_SEED":"Seed ve frontě",
   "OV_FL_SEEDING":"Seeduji",
   "OV_FL_STOPPED":"Zastaveno",
   "OV_NEWLABEL_CAPTION":"Zadej kategorii",
   "OV_NEWLABEL_TEXT":"Zadej novou kategorii pro vybrané torrenty:",
   "OV_NEW_LABEL":"Nová kategorie...",
   "OV_REMOVE_LABEL":"Odstranit kategorii",
   "OV_TABS":"Hlavní||Trackery||Uživatelé||Části||Soubory||Rychlost||Záznamy||",
   "OV_TB_ADDTORR":"Přidat torrent",
   "OV_TB_ADDURL":"Přidat torrent z URL",
   "OV_TB_PAUSE":"Pauza",
   "OV_TB_PREF":"Možnosti",
   "OV_TB_QUEUEDOWN":"Přesun ve frontě dolu",
   "OV_TB_QUEUEUP":"Přesun ve frontě nahoru",
   "OV_TB_REMOVE":"Odstranit",
   "OV_TB_RSSDOWNLDR":"RSS stahovač",
   "OV_TB_START":"Start",
   "OV_TB_STOP":"Stop",
   "MM_FILE":"Soubor",
   "MM_FILE_ADD_TORRENT":"Přidat torrent (výchozí složka)...",
   "MM_FILE_ADD_URL":"Přidat torrent z URL...",
   "MM_OPTIONS":"Nastavení",
   "MM_OPTIONS_PREFERENCES":"Možnosti",
   "MM_OPTIONS_SHOW_CATEGORY":"Zobrazit Postranní panel",
   "MM_OPTIONS_SHOW_DETAIL":"Zobrazit Detailní informace",
   "MM_OPTIONS_SHOW_STATUS":"Zobrazit Stavovou lištu",
   "MM_OPTIONS_SHOW_TOOLBAR":"Zobrazit Nástrojovou lištu",
   "MM_OPTIONS_TAB_ICONS":"Ikony na záložkách",
   "MM_HELP":"Nápověda",
   "MM_HELP_UT_WEBPAGE":"µTorrent na Internetu",
   "MM_HELP_UT_FORUMS":"µTorrent Fórum",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrenty",
   "STM_TORRENTS_PAUSEALL":"Pozastavit všechny torrenty",
   "STM_TORRENTS_RESUMEALL":"Obnovit všechny torrenty",
   "SB_DOWNLOAD":"D: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" O: %z/s",
   "SB_TOTAL":" C: %Z",
   "SB_UPLOAD":"U: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"Rozšířené",
   "ST_CAPT_BANDWIDTH":"Rychlost",
   "ST_CAPT_CONNECTION":"Připojení",
   "ST_CAPT_DISK_CACHE":"Cache",
   "ST_CAPT_FOLDER":"Složky",
   "ST_CAPT_GENERAL":"Hlavní",
   "ST_CAPT_SCHEDULER":"Plánovač",
   "ST_CAPT_QUEUEING":"Fronta",
   "ST_CAPT_UI_EXTRAS":"Nabídky",
   "ST_CAPT_UI_SETTINGS":"Rozhraní",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"Web UI",
   "ST_CAPT_TRANSFER_CAP":"FUP",
   "ST_CAPT_RUN_PROGRAM":"Spustit",
   "ST_CBO_UI_DBLCLK_TOR":"Zobrazit vlastnosti torrentu||Start / Stop torrentu||Otevřít složku||Zobrazit Lištu stahování||",
   "ST_CBO_ENCRYPTIONS":"Zakázáno||Povoleno||Vynuceno||",
   "ST_CBO_PROXY":"(není)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"odesílání||stahování||odesílání + stahování||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"Název",
   "ST_COL_VALUE":"Hodnota",
   "ST_SCH_DAYCODES":"Po||Út||St||Čt||Pá||So||Ne||",
   "ST_SCH_DAYNAMES":"Pondělí||Úterý||Středa||Čtvrtek||Pátek||Sobota||Neděle||",
   "ST_SCH_LGND_FULL":"Nejrychleji",
   "ST_SCH_LGND_FULLEX":"Nejrychleji - Plná rychlost daná celkovými rychlostními limity",
   "ST_SCH_LGND_LIMITED":"Omezeno",
   "ST_SCH_LGND_LIMITEDEX":"Omezeno - Omezená rychlost daná nastavením plánovače",
   "ST_SCH_LGND_SEEDING":"Jen seedování",
   "ST_SCH_LGND_SEEDINGEX":"Jen seedování - Pouze odesílání dat (včetně nedokončených)",
   "ST_SCH_LGND_OFF":"Zastaveno",
   "ST_SCH_LGND_OFFEX":"Zastaveno - Zastaví všechny torrenty, kromě spuštěných vynuceně",
   "ST_SEEDTIMES_HOURS":"<= %d hodin",
   "ST_SEEDTIMES_IGNORE":"neomezený",
   "ST_SEEDTIMES_MINUTES":"<= %d minut",
   "TIME_DAYS_HOURS":"%dd %dh",
   "TIME_HOURS_MINS":"%dh %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%dt %dd",
   "TIME_YEARS_WEEKS":"%dr %dt",
   "ML_MORE_ACTIONS":null,
   "Torrents":null,
   "Feeds":null,
   "App":null,
   "country":null,
   "ETA":null,
   "of":null,
   "/s":null,
   "Paste a torrent or feed URL":null,
   "Home":null,
   "Logout":null,
   "Seeding":null,
   "All Feeds":null,
   "bitrate":null,
   "resolution":null,
   "length":null,
   "streamable":null,
   "type":null,
   "remote":null,
   "about":null,
   "sessions":null,
   "share":null,
   "Share this torrent":null,
   "Share link":null,
   "add":null,
   "logout":null,
   "log in":null,
   "anywhere access":null,
   "stay signed in":null,
   "download":null,
   "Your client is currently not available. Verify that it is connected to the internet.":null,
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":null,
   "Open file":null,
   "Download to your computer":null,
   "Open with VLC Media Player":null,
   "Actions":null,
   "season":null,
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":null,
   "DLG_SETTINGS_MENU_TITLE":null,
   "DLG_SETTINGS_D_REMOTE_01":"BitTorrent Remote",
   "DLG_SETTINGS_D_REMOTE_02":"BitTorrent Remote přináší jednoduchý a vysoce bezpečný způsob přístupu k vašemu klientovi přes prohlížeč.",
   "DLG_SETTINGS_D_REMOTE_03":"Stačí jen povolit připojení níže, zadat název počítače a heslo a pamatovat si, že počítač musí zůstat zapnutý.",
   "DLG_SETTINGS_D_REMOTE_04":"Více informací",
   "DLG_SETTINGS_D_REMOTE_05":"Povolit vzdálený přístup BitTorrent Remote",
   "DLG_SETTINGS_D_REMOTE_06":"Ověření uživatele",
   "DLG_SETTINGS_D_REMOTE_07":"Název PC:",
   "DLG_SETTINGS_D_REMOTE_08":"Heslo:",
   "DLG_SETTINGS_D_REMOTE_09":"Odeslat",
   "ST_CAPT_REMOTE":"BitTorrent Remote"
}