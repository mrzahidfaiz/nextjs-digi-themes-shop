import { LucideProps } from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      {...props}
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}",
          }}
        />
      </defs>
      <path
        className="a"
        d="M6.9657,14.615V6.04a25.1315,25.1315,0,0,0,11.343,2.7683C24.7905,8.8084,26.8835,5.5,34.108,5.5a22.9729,22.9729,0,0,1,6.9263,1.5071V14.615"
      />
      <path
        className=""
        d="M41.0343,14.615V26.1606c0,3.3759-3.916,3.646-7.4945,3.646s-6.538,1.5079-6.538,4.895c0,1.5288,1.0015,1.8568,1.0015,4.22S26.7485,42.5,24,42.5s-4.0033-1.2153-4.0033-3.5785,1.0015-2.6911,1.0015-4.22c0-3.3871-2.96-4.895-6.538-4.895s-7.4945-.27-7.4945-3.646V14.615"
      />
      <line className="a" x1="6.9657" y1="14.615" x2="41.0343" y2="14.615" />
    </svg>
  ),
};
