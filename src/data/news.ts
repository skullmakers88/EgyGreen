import { NewsItem } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: 'sustainable-farming-practices',
    title: 'Sustainable Farming Practices at Assen Produce',
    excerpt: 'Learn about our commitment to environmental stewardship and sustainable agriculture.',
    content: `
      <p>At Assen Produce, sustainability isn't just a buzzword—it's at the core of everything we do. We believe that responsible farming practices are essential not only for protecting our environment but also for producing the highest quality fruits and vegetables.</p>
      
      <h3>Water Conservation</h3>
      <p>Water is one of our most precious resources, especially in agriculture. That's why we've implemented drip irrigation systems across our farms, reducing water usage by up to 60% compared to traditional methods. We also collect rainwater and use soil moisture sensors to ensure we're only watering when necessary.</p>
      
      <h3>Soil Health</h3>
      <p>Healthy soil is the foundation of healthy produce. We use cover crops, crop rotation, and compost to maintain and improve soil health naturally. These practices increase organic matter in the soil, improve water retention, and reduce the need for synthetic fertilizers.</p>
      
      <h3>Integrated Pest Management</h3>
      <p>Rather than relying on chemical pesticides, we use Integrated Pest Management (IPM) strategies. This includes introducing beneficial insects, using physical barriers, and monitoring pest populations to intervene only when necessary and in the least toxic way possible.</p>
      
      <h3>Renewable Energy</h3>
      <p>Our packing facilities and cold storage units are powered by solar panels, significantly reducing our carbon footprint. We're working toward making our entire operation carbon-neutral by 2025.</p>
      
      <h3>Biodiversity</h3>
      <p>We maintain hedgerows and natural habitats around our fields to support local wildlife and pollinators. This not only helps the environment but also improves crop yields through better pollination.</p>
      
      <p>By choosing Assen Produce, you're not just getting the freshest, most flavorful fruits and vegetables—you're also supporting a business committed to preserving the planet for future generations.</p>
    `,
    image: 'https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg',
    date: 'April 15, 2025',
    author: 'Elena Martinez',
    category: 'Sustainability'
  },
  {
    id: 'new-organic-certification',
    title: 'Assen Produce Receives Prestigious Organic Certification',
    excerpt: 'Our commitment to organic farming practices has earned us certification from the Organic Farmers Association.',
    content: `
      <p>We are proud to announce that Assen Produce has received organic certification from the Organic Farmers Association (OFA), one of the most respected organic certification bodies in the United States.</p>
      
      <p>This certification comes after a rigorous three-year transition period during which we eliminated all synthetic pesticides and fertilizers from our farming practices, implemented organic pest management strategies, and enhanced soil health through natural methods.</p>
      
      <h3>What This Means For Our Customers</h3>
      <p>With this certification, consumers can be confident that all produce labeled "organic" from Assen Produce meets the stringent standards set by the OFA. This includes:</p>
      <ul>
        <li>No synthetic pesticides or fertilizers</li>
        <li>No genetically modified organisms (GMOs)</li>
        <li>Adherence to soil conservation practices</li>
        <li>Humane treatment of any farm animals</li>
        <li>No artificial preservatives, colors, or flavors</li>
      </ul>
      
      <h3>Expanded Organic Offerings</h3>
      <p>Following this certification, we're excited to announce an expansion of our organic produce line. Starting next month, we'll be offering organic varieties of:</p>
      <ul>
        <li>Rainbow carrots</li>
        <li>Cherry tomatoes</li>
        <li>Baby kale</li>
        <li>Mixed bell peppers</li>
        <li>Heirloom lettuce varieties</li>
      </ul>
      
      <h3>The Organic Journey</h3>
      <p>The path to organic certification wasn't easy. It required a complete transformation of our farming practices, significant investment in training and infrastructure, and patience during the transition period when yields were lower but we couldn't yet command organic prices.</p>
      
      <p>"This certification represents years of hard work and dedication from our entire team," says Carlos Assen, founder and CEO. "We're committed to growing the most nutritious, delicious produce possible while being responsible stewards of the land."</p>
      
      <p>Look for the OFA certification seal on our organic products, and taste the difference that organic farming makes!</p>
    `,
    image: 'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg',
    date: 'March 28, 2025',
    author: 'Carlos Assen',
    category: 'Certification'
  },
  {
    id: 'seasonal-produce-guide',
    title: 'Your Guide to Spring Seasonal Produce',
    excerpt: "Discover what's fresh and at its peak flavor during the spring growing season.",
    content: `
      <p>As the days grow longer and temperatures rise, the spring growing season brings an abundance of fresh, flavorful produce. Eating seasonally not only ensures you're getting the best flavor and nutritional value but also supports sustainable farming practices.</p>
      
      <h3>Spring Stars: What's in Season Now</h3>
      
      <h4>Asparagus</h4>
      <p>One of the first vegetables to emerge in spring, asparagus is at its peak from March through May. Look for firm stalks with tight, compact tips. Thinner stalks are more tender, while thicker ones have more robust flavor.</p>
      <p><strong>Try it:</strong> Simply roasted with olive oil, salt, and lemon zest, or add to pasta and risotto dishes.</p>
      
      <h4>Strawberries</h4>
      <p>Spring strawberries have an intensity of flavor that can't be matched by their out-of-season counterparts. Our spring strawberries are smaller but packed with sweetness.</p>
      <p><strong>Try them:</strong> Fresh in salads, macerated with a touch of sugar for shortcake, or simply eaten out of hand.</p>
      
      <h4>Peas</h4>
      <p>Fresh peas—whether snow, snap, or English—are a fleeting spring pleasure. Their natural sweetness starts converting to starch as soon as they're picked, so enjoy them quickly.</p>
      <p><strong>Try them:</strong> Quickly blanched and added to pasta, mashed into a spring pea spread for toast, or raw in salads.</p>
      
      <h4>Radishes</h4>
      <p>Spring radishes offer a crisp texture and peppery bite that adds dimension to many dishes. Our French Breakfast and Easter Egg varieties are particularly beautiful.</p>
      <p><strong>Try them:</strong> Sliced thinly on buttered bread with salt, roasted to bring out their sweetness, or pickled for a tangy condiment.</p>
      
      <h4>Spring Onions</h4>
      <p>More delicate than their storage counterparts, spring onions (sometimes called scallions) offer a milder flavor that's perfect in spring dishes.</p>
      <p><strong>Try them:</strong> Grilled whole as a side dish, chopped raw in salads, or as a garnish for soups and grain bowls.</p>
      
      <h3>Storing Spring Produce</h3>
      <p>For maximum freshness, store most spring vegetables in the refrigerator crisper drawer. Leafy greens will stay crisp longer if wrapped in a damp paper towel and placed in a reusable bag. Berries should be refrigerated and washed only just before eating to prevent mold.</p>
      
      <p>Visit our farm stand or check out our CSA program to enjoy the freshest spring produce all season long!</p>
    `,
    image: 'https://images.pexels.com/photos/162673/vegetable-market-agriculture-fresh-162673.jpeg',
    date: 'March 10, 2025',
    author: 'Sarah Johnson',
    category: 'Seasonal'
  },
  {
    id: 'community-supported-agriculture',
    title: 'Join Our Community Supported Agriculture Program',
    excerpt: 'Connect directly with Assen Produce through our CSA membership program.',
    content: `
      <p>We're excited to announce enrollment for our 2025 Community Supported Agriculture (CSA) program is now open! CSA memberships offer a unique opportunity to connect directly with your food source while enjoying the freshest seasonal produce throughout the growing season.</p>
      
      <h3>What is Community Supported Agriculture?</h3>
      <p>CSA is a partnership between farmers and consumers where members purchase a "share" of the farm's harvest upfront, then receive a regular box of fresh, seasonal produce throughout the growing season. This model provides farmers with the capital they need at the beginning of the season and guarantees members the freshest possible produce directly from the farm.</p>
      
      <h3>Our CSA Program Details</h3>
      
      <h4>Season Length:</h4>
      <p>20 weeks, from May through September</p>
      
      <h4>Share Options:</h4>
      <ul>
        <li><strong>Full Share:</strong> Ideal for families of 3-4 or couples who eat primarily plant-based</li>
        <li><strong>Half Share:</strong> Perfect for individuals or couples</li>
        <li><strong>Fruit Add-on:</strong> A supplemental box of seasonal fruits</li>
        <li><strong>Herb Add-on:</strong> A selection of fresh culinary herbs each week</li>
      </ul>
      
      <h4>Pick-up Locations:</h4>
      <ul>
        <li>Assen Farm Stand (Tuesdays, 2-6pm)</li>
        <li>Downtown Farmers Market (Wednesdays, 10am-2pm)</li>
        <li>Westside Co-op (Thursdays, 3-7pm)</li>
        <li>Home delivery available within 15 miles of the farm for an additional fee</li>
      </ul>
      
      <h3>What's in a Typical Share?</h3>
      <p>Each week's share includes 7-10 different vegetables and herbs at the peak of freshness and flavor. A typical mid-summer box might include:</p>
      <ul>
        <li>2 heads of lettuce</li>
        <li>1 bunch of kale or chard</li>
        <li>1 pint of cherry tomatoes</li>
        <li>4 slicing tomatoes</li>
        <li>2 cucumbers</li>
        <li>1 pound of green beans</li>
        <li>2 summer squash</li>
        <li>3 bell peppers</li>
        <li>1 bunch of herbs</li>
      </ul>
      
      <h3>CSA Member Benefits</h3>
      <ul>
        <li>Weekly newsletter with recipes and farm updates</li>
        <li>10% discount on additional purchases at our farm stand</li>
        <li>Invitation to member-only farm events and harvest dinners</li>
        <li>First access to limited items like flowers and specialty crops</li>
      </ul>
      
      <h3>How to Join</h3>
      <p>Visit our website's CSA page to sign up, or stop by our farm stand to register in person. A 50% deposit secures your share, with the balance due by May 1st. Payment plans and SNAP benefits are accepted.</p>
      
      <p>Join our CSA family and taste the difference of truly fresh, locally grown produce while supporting sustainable agriculture in our community!</p>
    `,
    image: 'https://images.pexels.com/photos/8989479/pexels-photo-8989479.jpeg',
    date: 'February 15, 2025',
    author: 'Michael Assen',
    category: 'Community'
  }
];

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsItems.find(item => item.id === id);
};