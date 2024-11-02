type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      {...props}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 500 500"
    >
      <path
        d="M0 0 C165 0 330 0 500 0 C500 165 500 330 500 500 C335 500 170 500 0 500 C0 335 0 170 0 0 Z "
        fill="none"
        transform="translate(0,0)"
      />
      <path
        d="M0 0 C3.42933974 2.04972031 5.89746913 4.47523152 8.49609375 7.453125 C9.20560181 8.24783203 9.20560181 8.24783203 9.92944336 9.05859375 C23.67402041 24.59818027 23.67402041 24.59818027 23.43286133 31.68676758 C21.75694068 41.2754825 15.7478315 50.80020961 11.47332764 59.51965332 C10.04329683 62.43679863 8.62082738 65.35761048 7.19790649 68.27822876 C6.48275921 69.74599838 5.76724685 71.21359018 5.05136108 72.68099976 C2.14889064 78.63252834 -0.71821187 84.60042642 -3.56640625 90.578125 C-7.64578732 99.13181496 -11.75551406 107.67058308 -15.87890625 116.203125 C-21.76374633 128.38174085 -27.62550673 140.57128578 -33.47363281 152.76757812 C-36.45602238 158.98634652 -39.44124534 165.20375569 -42.42651367 171.42114258 C-45.01599651 176.81472977 -47.60337147 182.20931396 -50.1875 187.60546875 C-50.72181641 188.72050781 -51.25613281 189.83554687 -51.80664062 190.984375 C-52.82034542 193.09993282 -53.83341452 195.21579542 -54.84570312 197.33203125 C-57.47200008 202.81109305 -60.14441141 208.26091464 -62.90283203 213.67480469 C-63.84988924 215.63837887 -64.62155765 217.59879131 -65.37890625 219.640625 C-67.3600226 223.68210236 -69.28642659 225.23918107 -72.94140625 227.828125 C-77.59828045 229.3804164 -82.15154797 229.72446501 -86.88671875 228.203125 C-94.41699969 224.17017119 -99.66081086 216.34891931 -104.94140625 209.828125 C-105.699375 208.920625 -106.45734375 208.013125 -107.23828125 207.078125 C-110.90539976 202.23349137 -110.52669125 196.64475215 -109.94140625 190.828125 C-108.87048675 187.16341881 -107.27208166 183.8620607 -105.56640625 180.453125 C-105.08671387 179.45055664 -104.60702148 178.44798828 -104.11279297 177.41503906 C-102.72532075 174.52844412 -101.31784296 171.65259644 -99.90136719 168.78015137 C-98.14120563 165.20096222 -96.40242683 161.61135979 -94.66015625 158.0234375 C-92.34138209 153.251432 -90.01989521 148.48080584 -87.6887207 143.71484375 C-83.26976593 134.6737101 -78.94341322 125.60326525 -74.75390625 116.453125 C-68.39615983 102.58585139 -61.64719121 88.91454014 -54.91583252 75.22573853 C-49.0301305 63.25218465 -43.19763218 51.26514665 -37.62890625 39.140625 C-33.96973286 31.17744569 -30.26576058 23.24571489 -26.37890625 15.390625 C-25.98469482 14.58471924 -25.5904834 13.77881348 -25.18432617 12.94848633 C-19.92207362 2.43428814 -12.24169324 -4.87716862 0 0 Z "
        fill="#FDFDFD"
        transform="translate(295.94140625,136.171875)"
      />
      <path
        d="M0 0 C6.25617613 2.12274891 12.0818608 5.08288551 18 8 C20.37805454 9.15154688 22.7568536 10.30142976 25.13671875 11.44921875 C29.10047737 13.36232185 33.06244007 15.27885606 37.01782227 17.20922852 C46.72299864 21.94041471 56.49120438 26.50433557 66.36328125 30.87988281 C77.92827185 36.10241315 89.34673601 41.6241132 94.125 54 C94.77611655 55.99165063 95.39880818 57.99271492 96 60 C96.37382812 61.2065625 96.74765625 62.413125 97.1328125 63.65625 C100.36209101 74.50978984 102.00622671 83.24354366 96.77734375 93.61328125 C90.9068532 101.49651141 82.46041824 105.01096999 73.8125 109.0625 C72.43222988 109.71874981 71.05235284 110.37582695 69.67285156 111.03369141 C65.45639092 113.03926215 61.22971386 115.02256088 57 117 C56.35053406 117.30391663 55.70106812 117.60783325 55.03192139 117.92095947 C48.49303141 120.9794018 41.94495249 124.01774894 35.390625 127.04296875 C29.57892426 129.72683235 23.78407122 132.44464325 18 135.1875 C17.23461914 135.55020996 16.46923828 135.91291992 15.68066406 136.28662109 C11.72436129 138.15420455 11.72436129 138.15420455 7.8671875 140.21484375 C3.55410553 142.02850374 -1.43688898 141.47774854 -6 141 C-12.21025973 138.29006848 -15.35059602 132.82538216 -17.96508789 126.76171875 C-18.81676066 124.4408296 -19.58583905 122.11297061 -20.3125 119.75 C-20.5688623 118.92024658 -20.82522461 118.09049316 -21.08935547 117.2355957 C-23.35950546 109.47258779 -24.95314804 102.13165931 -21.375 94.5625 C-16.8771986 89.70960902 -12.58697093 86.52385969 -6.546875 83.8359375 C-5.63215675 83.42459564 -5.63215675 83.42459564 -4.69895935 83.00494385 C-2.72018333 82.11847469 -0.73547926 81.24633896 1.25 80.375 C2.62743383 79.76273896 4.00462849 79.14993958 5.3815918 78.53662109 C14.49247429 74.49136143 23.64148607 70.53184673 32.8125 66.625 C33.91432617 66.15497559 35.01615234 65.68495117 36.15136719 65.20068359 C37.15973633 64.77609863 38.16810547 64.35151367 39.20703125 63.9140625 C40.52924683 63.3564624 40.52924683 63.3564624 41.87817383 62.78759766 C44 62 44 62 46 62 C46 61.34 46 60.68 46 60 C44.865625 59.67 43.73125 59.34 42.5625 59 C37.34415185 57.25519022 32.45043437 54.92112556 27.50170898 52.54150391 C19.32326253 48.62851391 11.02000673 45.00236727 2.70556641 41.38891602 C-18.77363423 31.95605913 -18.77363423 31.95605913 -22.2578125 25.34375 C-24.18671875 19.25246711 -24.08100614 13.2420868 -21.3125 7.5 C-14.68174024 0.33161107 -9.64578841 -1.33257438 0 0 Z "
        fill="#FDFDFD"
        transform="translate(343,178)"
      />
      <path
        d="M0 0 C6.33888539 2.71323503 9.23763111 7.50608897 11.77294922 13.74707031 C12.62930419 16.23403262 13.39197828 18.7318854 14.125 21.2578125 C14.38861328 22.09183594 14.65222656 22.92585938 14.92382812 23.78515625 C16.91964466 30.49317337 17.99070995 37.19771257 16.0625 44.046875 C11.05992929 51.8946578 3.00731731 54.80522434 -5.1875 58.3828125 C-8.14263261 59.68672403 -11.0975862 60.99102805 -14.05110168 62.29859924 C-17.13158497 63.66143185 -20.21550131 65.01462677 -23.30932617 66.34692383 C-24.44345947 66.84087646 -25.57759277 67.3348291 -26.74609375 67.84375 C-28.28221313 68.50576416 -28.28221313 68.50576416 -29.84936523 69.18115234 C-32.3230216 70.16127924 -32.3230216 70.16127924 -33.1875 72.3828125 C-32.053125 72.7128125 -30.91875 73.0428125 -29.75 73.3828125 C-22.64742037 75.74660477 -15.97973759 79.12576939 -9.25732422 82.38818359 C-7.38112018 83.28977067 -5.49011545 84.16039563 -3.59765625 85.02734375 C2.21409373 87.75003008 6.29889033 89.93065956 9.8125 95.3828125 C11.61223286 100.78201107 11.51362627 106.31838515 9.6875 111.6953125 C6.087915 116.85471767 1.96677075 120.00124151 -4.1875 121.3828125 C-8.50234774 121.87128583 -11.44804251 121.42640509 -15.3203125 119.625 C-16.11187744 119.26164551 -16.90344238 118.89829102 -17.71899414 118.52392578 C-18.53360107 118.1473584 -19.34820801 117.77079102 -20.1875 117.3828125 C-21.75018917 116.68759718 -23.31399394 115.99488402 -24.87890625 115.3046875 C-33.16016859 111.62046729 -41.38172546 107.86964788 -49.46166992 103.76147461 C-57.84789873 99.50992859 -66.33646443 95.46691004 -74.81030273 91.39379883 C-80.16925642 88.81675275 -85.52587346 86.23486463 -90.859375 83.60546875 C-91.62088867 83.23043213 -92.38240234 82.85539551 -93.16699219 82.46899414 C-99.4098114 79.1129885 -103.66130992 74.35061241 -105.76953125 67.48828125 C-107.2192796 60.18534328 -106.81757599 53.37372706 -103.01904297 46.87573242 C-96.89835691 38.54484395 -86.37098404 34.24883787 -77.1875 30.1953125 C-75.33784058 29.36147209 -73.49037949 28.52289248 -71.64306641 27.68386841 C-70.37901567 27.10985749 -69.11436397 26.53716818 -67.84912109 25.96578979 C-61.23772284 22.9736903 -54.71291546 19.80741474 -48.1875 16.6328125 C-37.89024187 11.6400213 -27.52371249 6.83847337 -17.04907227 2.22973633 C-15.7093357 1.62022208 -14.38745828 0.97088874 -13.07885742 0.29711914 C-8.97826666 -1.68515947 -4.29370945 -1.21143945 0 0 Z "
        fill="#FDFDFD"
        transform="translate(163.1875,177.6171875)"
      />
      <path
        d="M0 0 C6.73232651 5.09029566 14.17127195 12.31729334 15.4375 21 C15.09634466 31.02785936 7.79071661 41.76508065 3.41473389 50.69152832 C1.98470308 53.60867363 0.56223363 56.52948548 -0.86068726 59.45010376 C-1.57583454 60.91787338 -2.2913469 62.38546518 -3.00723267 63.85287476 C-5.90970311 69.80440334 -8.77680562 75.77230142 -11.625 81.75 C-15.70438107 90.30368996 -19.81410781 98.84245808 -23.9375 107.375 C-29.82234008 119.55361585 -35.68410048 131.74316078 -41.53222656 143.93945312 C-44.51461613 150.15822152 -47.49983909 156.37563069 -50.48510742 162.59301758 C-53.07459026 167.98660477 -55.66196522 173.38118896 -58.24609375 178.77734375 C-58.78041016 179.89238281 -59.31472656 181.00742187 -59.86523438 182.15625 C-60.87893917 184.27180782 -61.89200827 186.38767042 -62.90429688 188.50390625 C-65.53059383 193.98296805 -68.20300516 199.43278964 -70.96142578 204.84667969 C-71.90848299 206.81025387 -72.6801514 208.77066631 -73.4375 210.8125 C-75.41861635 214.85397736 -77.34502034 216.41105607 -81 219 C-85.6671363 220.5557121 -90.24739604 220.91753465 -94.98046875 219.33984375 C-102.13328678 215.46109913 -107.02112072 208.25105616 -112 202 C-109 202 -109 202 -107 203 C-104.79876705 203.27499687 -104.79876705 203.27499687 -102.3125 203.3125 C-101.48363281 203.34988281 -100.65476563 203.38726562 -99.80078125 203.42578125 C-95.98569833 202.84580351 -93.02157422 201.33765957 -90 199 C-88.39978387 196.54007777 -87.23659277 194.45246314 -86.078125 191.80859375 C-85.74887024 191.1056871 -85.41961548 190.40278046 -85.0803833 189.67857361 C-84.38736752 188.19889819 -83.70222586 186.71551153 -83.0246582 185.22869873 C-81.71295857 182.37566609 -80.33217922 179.55953296 -78.94599915 176.74212646 C-77.19858166 173.18975328 -75.47673174 169.62496099 -73.75 166.0625 C-73.00237304 164.52164082 -72.25473287 162.98078805 -71.50708008 161.43994141 C-65.77290092 149.61690118 -60.07503557 137.77675342 -54.40185547 125.92431641 C-52.99177673 122.982846 -51.57671561 120.04382314 -50.16015625 117.10546875 C-45.85413736 108.16734975 -41.56387093 99.22282314 -37.35546875 90.23828125 C-36.88074127 89.22495728 -36.88074127 89.22495728 -36.39642334 88.19116211 C-36.07498352 87.50497803 -35.7535437 86.81879395 -35.42236328 86.11181641 C-34.76077805 84.69952747 -34.09915666 83.28725547 -33.4375 81.875 C-33.10893005 81.17364929 -32.78036011 80.47229858 -32.4418335 79.74969482 C-25.92728171 65.85755064 -19.22601497 52.05905689 -12.47045898 38.28271484 C-10.63450923 34.53808222 -8.80877951 30.78863348 -6.99041748 27.03543091 C-6.04478607 25.09204094 -5.08655055 23.15526833 -4.12744141 21.21850586 C-3.58007324 20.08678955 -3.03270508 18.95507324 -2.46875 17.7890625 C-1.99630859 16.82564941 -1.52386719 15.86223633 -1.03710938 14.86962891 C0.73152656 9.97590321 0.49817606 5.1201428 0 0 Z "
        fill="#7078A4"
        transform="translate(304,145)"
      />
      <path
        d="M0 0 C5.46230734 8.19346101 8.89188391 22.32524405 7 32 C4.26305146 40.25907378 -0.44071368 45.4744317 -8.02124023 49.67358398 C-11.71772176 51.52925998 -15.44238426 53.3079218 -19.1875 55.0625 C-20.56777012 55.71874981 -21.94764716 56.37582695 -23.32714844 57.03369141 C-27.54360908 59.03926215 -31.77028614 61.02256088 -36 63 C-36.64946594 63.30391663 -37.29893188 63.60783325 -37.96807861 63.92095947 C-44.50696859 66.9794018 -51.05504751 70.01774894 -57.609375 73.04296875 C-63.42107574 75.72683235 -69.21592878 78.44464325 -75 81.1875 C-75.76538086 81.55020996 -76.53076172 81.91291992 -77.31933594 82.28662109 C-81.27563871 84.15420455 -81.27563871 84.15420455 -85.1328125 86.21484375 C-89.44589447 88.02850374 -94.43688898 87.47774854 -99 87 C-104.61288365 84.55074168 -107.46130125 80.40742834 -110 75 C-111.57854139 70.72894656 -113.02885989 66.45210985 -114 62 C-113.67 61.34 -113.34 60.68 -113 60 C-111.53515625 61.26953125 -110.0703125 62.5390625 -108.60546875 63.80859375 C-104.15167854 67.11371787 -98.25234339 66.52864211 -93 66 C-89.54876021 64.95503934 -86.49167232 63.37473992 -83.3125 61.6875 C-81.31499381 60.68122463 -79.31618436 59.67753403 -77.31640625 58.67578125 C-76.18605957 58.1029541 -75.05571289 57.53012695 -73.89111328 56.93994141 C-66.78241956 53.36945479 -59.56653719 50.01537808 -52.37484741 46.61636353 C-49.82467156 45.41031426 -47.27591658 44.20132469 -44.7277832 42.9909668 C-43.91110672 42.60315536 -43.09443024 42.21534393 -42.25300598 41.81578064 C-40.62153772 41.04038092 -38.9905017 40.26407106 -37.35990906 39.48683167 C-33.16859011 37.49157682 -28.96809027 35.52075881 -24.74804688 33.58691406 C-23.89172668 33.19098053 -23.03540649 32.795047 -22.15313721 32.38711548 C-20.53153013 31.63807995 -18.90668511 30.89599661 -17.27801514 30.16244507 C-10.57079037 27.04966793 -4.9479564 23.43045382 -1.74609375 16.53515625 C-0.1701679 11.18030874 -0.15587224 5.54905163 0 0 Z "
        fill="#7477A3"
        transform="translate(436,232)"
      />
      <path
        d="M0 0 C0.4125 0.37511719 0.825 0.75023437 1.25 1.13671875 C1.8275 1.64847656 2.405 2.16023437 3 2.6875 C3.8353125 3.43580078 3.8353125 3.43580078 4.6875 4.19921875 C11.91320397 9.8259916 20.01114534 13.47518023 28.3125 17.25 C29.56704029 17.82574424 30.82126912 18.40216759 32.07519531 18.97924805 C34.56646377 20.12568048 37.05854997 21.27030073 39.55126953 22.41357422 C53.21248641 28.69777267 66.70724601 35.28940804 80.12524414 42.07470703 C81.18473267 42.60813721 81.18473267 42.60813721 82.265625 43.15234375 C82.90661133 43.47581787 83.54759766 43.79929199 84.20800781 44.13256836 C90.57602529 47.21507055 96.32054063 48.03656698 103.125 45.875 C107.13919184 44.18686118 110.0054777 41.91636969 112 38 C112.94364088 34.69478666 113.54910769 31.40524638 114 28 C118.12335544 35.67092701 121.45934775 45.22611659 120 54 C118.01544858 59.43140388 114.79075379 63.32554773 109.8125 66.3125 C100.83136992 68.50788735 94.13648221 66.3171843 86.0625 62.3125 C85.03326416 61.82136719 84.00402832 61.33023438 82.94360352 60.82421875 C79.62032899 59.23364286 76.31052689 57.61691387 73 56 C70.74837622 54.91852938 68.49576709 53.8391079 66.2421875 52.76171875 C61.70677609 50.59055619 57.17721354 48.40788882 52.65234375 46.21484375 C48.29850364 44.10618063 43.93731736 42.01445161 39.56640625 39.94140625 C38.03125366 39.21244141 38.03125366 39.21244141 36.46508789 38.46875 C34.56829999 37.56916183 32.67044936 36.67180889 30.77124023 35.77734375 C7.01953774 24.49467525 7.01953774 24.49467525 2.0625 10.75 C0.73449779 6.83858512 0 4.15238998 0 0 Z "
        fill="#3683A3"
        transform="translate(60,251)"
      />
      <path
        d="M0 0 C4.4975923 6.74638846 6.98237052 16.56635818 6.4765625 24.69921875 C5.47927983 29.51396868 3.6000723 32.64524779 0 36 C-5.08033944 39.23533938 -10.4908693 41.59104216 -16 44 C-18.94101908 45.30392754 -21.88143521 46.60919993 -24.8212738 47.91578674 C-27.88730675 49.27699278 -30.95692637 50.62773629 -34.03393555 51.96411133 C-35.16484619 52.45806396 -36.29575684 52.9520166 -37.4609375 53.4609375 C-38.47978027 53.90228027 -39.49862305 54.34362305 -40.54833984 54.79833984 C-43.10152223 55.88570263 -43.10152223 55.88570263 -45 58 C-52.92 54.37 -60.84 50.74 -69 47 C-69 46.34 -69 45.68 -69 45 C-64.48999284 42.92739073 -59.97885543 40.85726601 -55.46664429 38.78945923 C-53.86670875 38.05611567 -52.26695621 37.32237274 -50.66738892 36.58822632 C-42.58078906 32.8782373 -34.49147989 29.18465341 -26.3203125 25.6640625 C-25.18843506 25.17591064 -24.05655762 24.68775879 -22.89038086 24.18481445 C-20.81168231 23.29417 -18.7293344 22.41197741 -16.64282227 21.53979492 C-10.67978808 18.98465156 -5.36214933 16.5639446 -1.6640625 10.984375 C-0.90502164 8.71618231 -0.58514668 6.63166234 -0.375 4.25 C-0.30023438 3.45078125 -0.22546875 2.6515625 -0.1484375 1.828125 C-0.07496094 0.92320312 -0.07496094 0.92320312 0 0 Z "
        fill="#9271A3"
        transform="translate(174,192)"
      />
      <path
        d="M0 0 C0.78375 0.721875 1.5675 1.44375 2.375 2.1875 C11.1330808 9.39885552 23.01620081 13.20192496 33.29931641 17.79296875 C37.72402891 19.77052965 42.14317899 21.76042687 46.5625 23.75 C47.39539551 24.12471436 48.22829102 24.49942871 49.08642578 24.88549805 C55.06430229 27.57572242 61.03646248 30.27811017 67 33 C67 33.66 67 34.32 67 35 C64.04435292 36.33934716 61.0850622 37.67044247 58.125 39 C57.28324219 39.3815625 56.44148438 39.763125 55.57421875 40.15625 C54.36572266 40.69765625 54.36572266 40.69765625 53.1328125 41.25 C52.38918457 41.58515625 51.64555664 41.9203125 50.87939453 42.265625 C49 43 49 43 47 43 C47 42.34 47 41.68 47 41 C45.97302002 40.84156616 45.97302002 40.84156616 44.92529297 40.67993164 C39.39767961 39.39513752 34.32718883 36.74913109 29.18994141 34.38256836 C27.14602246 33.44712142 25.09128775 32.53907865 23.03515625 31.63085938 C14.13848995 27.60352477 7.01361031 23.48638057 3.22265625 14.04296875 C2.8153592 12.76418531 2.42825326 11.47877942 2.0625 10.1875 C1.85560547 9.53330078 1.64871094 8.87910156 1.43554688 8.20507812 C0.56253329 5.36560869 0 2.98561222 0 0 Z "
        fill="#3B83A3"
        transform="translate(322,205)"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
